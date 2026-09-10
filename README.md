# 📁 DocVault-AI

**Smart document vault with AI-powered Q&A** — upload your documents and ask questions about them in natural language, powered by Retrieval-Augmented Generation (RAG).

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## ✨ Features

- 📤 **Document Upload** — Upload files (PDF, DOCX, TXT, etc.) securely into your personal vault
- 🤖 **AI-Powered Q&A** — Ask natural language questions about your uploaded documents
- 🔍 **RAG Pipeline** — Retrieval-Augmented Generation ensures answers are grounded in your actual document content
- 📚 **Document Management** — Organize, view, and manage all your uploaded files in one place
- ⚡ **Fast & Responsive UI** — Built with React for a smooth user experience

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React |
| **Backend** | Node.js, Express |
| **AI/RAG** | LLM-based retrieval & question answering |

---

## 📂 Project Structure

```
DocVault-AI/
├── backend/          # Express server, API routes, RAG logic
└── frontend/         # React application
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tomerarvind195-byte/DocVault-AI.git
   cd DocVault-AI
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` (or your configured port)

---

## 📖 How It Works

1. **Upload** — User uploads a document through the React frontend
2. **Process** — Backend extracts and chunks the document content
3. **Embed & Store** — Content is converted into embeddings for retrieval
4. **Ask** — User asks a question about the document
5. **Retrieve & Answer** — RAG pipeline retrieves relevant chunks and generates an accurate, grounded answer

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
Made with ❤️ by <a href="https://github.com/tomerarvind195-byte">tomerarvind195-byte</a>
</div>
