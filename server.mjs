import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT || 3001);

const smtpUser = process.env.YANDEX_SMTP_USER;
const smtpPassword = process.env.YANDEX_SMTP_PASSWORD;
const recipientEmail =
  process.env.CONTACT_RECIPIENT_EMAIL || "paramonovjegor@yandex.ru";

if (!smtpUser || !smtpPassword) {
  console.warn(
    "[mail] YANDEX_SMTP_USER or YANDEX_SMTP_PASSWORD is missing. Form sending is disabled until env vars are configured.",
  );
}

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: smtpUser && smtpPassword
    ? {
        user: smtpUser,
        pass: smtpPassword,
      }
    : undefined,
});

app.use(express.json());

app.post("/api/request", async (req, res) => {
  const { name, email, projectType, contactPreference, idea } = req.body ?? {};

  if (!smtpUser || !smtpPassword) {
    return res.status(500).json({
      message:
        "Почтовая отправка не настроена. Добавьте YANDEX_SMTP_USER и YANDEX_SMTP_PASSWORD в .env.",
    });
  }

  if (!name || !email || !projectType || !contactPreference || !idea) {
    return res.status(400).json({
      message: "Заполните все обязательные поля формы.",
    });
  }

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      replyTo: email,
      subject: `Новая заявка с сайта Jorwell: ${projectType}`,
      text: [
        "Новая заявка с сайта Jorwell",
        "",
        `Имя: ${name}`,
        `Email: ${email}`,
        `Тип проекта: ${projectType}`,
        `Как связаться: ${contactPreference}`,
        "",
        "Описание идеи:",
        idea,
      ].join("\n"),
    });

    return res.status(200).json({
      message: "Заявка отправлена. Мы скоро свяжемся с вами.",
    });
  } catch (error) {
    console.error("[mail] send failed", error);
    return res.status(500).json({
      message:
        "Не удалось отправить заявку. Проверьте настройки почты и попробуйте снова.",
    });
  }
});

app.listen(port, () => {
  console.log(`[mail] API listening on http://localhost:${port}`);
});
