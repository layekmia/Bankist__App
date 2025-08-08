# 💰 Bankist - Minimal Banking App

A minimalist, single-page banking application built using **Vanilla JavaScript** and **CSS**, focused on dynamic UI updates, user actions, and session security — without any frameworks.
## 🚀 Live Preview

🔗 [Live Site](https://layekmia.github.io/Bankist__App/)

---

## 📝 Features

- 🔐 **Login Authentication** (credential-based, no backend)
- 📈 **Dynamic Balance & Summary Calculation**
- 💸 **Fund Transfers** between accounts
- 💳 **Loan Requests** with eligibility validation (≥10% deposit condition)
- 🔁 **Transaction Sorting** (toggle between sorted/unsorted views)
- 🕒 **Auto Logout Timer** after inactivity
- ❌ **Account Closure** with credential confirmation
- 📊 **Real-Time UI Updates** for movements, balance, and summaries

---

## 🧩 How It Works

- **User Login:** Validates against existing accounts.
- **Transfer Money:** Adds a negative movement to the sender and a positive to the recipient.
- **Loan Approval:** Loan granted if any previous deposit ≥ 10% of requested amount.
- **Sorting:** Users can toggle transaction order (chronological vs ascending).
- **Logout Timer:** Resets on each user activity and logs out on expiry.

---

## 🛠️ Tech Stack

- ⚙️ **Vanilla JavaScript** (DOM manipulation, timers, array methods)
- 🎨 **CSS3** (responsive design, clean UI)
- 📁 **HTML5** (semantic layout, forms)

---

## 📷 Screenshots

*(Add screenshots or a GIF here if you'd like)*

---

## 📂 Folder Structure

```bash
📦bankist-app
 ┣ 📄 index.html
 ┣ 📄 style.css
 ┗ 📄 app.js

