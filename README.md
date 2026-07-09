# 🔐 Bardia - Advanced Traffic Intelligence Gateway

Bardia is a powerful, lightweight gateway built on **Cloudflare Workers** with advanced traffic analysis, monitoring, and intelligent filtering capabilities. A modern alternative to Nahan with enhanced analytics and real-time insights.

## ✨ Features

### Core Gateway
- 🚀 **Lightning-fast** deployment on Cloudflare Workers
- 🔒 **End-to-end encryption** support (VLESS/Trojan)
- 🌍 **Global CDN** integration
- ⚡ **Sub-100ms latency** response times
- 🛡️ **Stealth mode** - camouflage as legitimate traffic

### Advanced Analytics
- 📊 **Real-time traffic monitoring** dashboard
- 📈 **Request analytics** and performance metrics
- 🔍 **Deep packet inspection** capabilities
- 🎯 **Traffic pattern recognition**
- 📉 **Bandwidth tracking** per user/endpoint

### Intelligent Filtering
- 🛡️ **Custom Rule Engine** for advanced filtering
- 🚫 **Geo-blocking** and IP reputation scoring
- 🔐 **DDoS protection** with automatic mitigation
- ⏱️ **Rate limiting** per IP/endpoint
- 🎭 **Configurable fake responses**

### Management & Control
- 👥 **Multi-user** support with role-based access
- 🎛️ **Web Dashboard** (RTL-Persian/English)
- 💾 **D1 SQLite** database for persistence
- 🤖 **Telegram Bot** integration for alerts
- 🛑 **Kill Switch** for emergency shutdown
- 📋 **Activity Logs** with full audit trail

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- Wrangler CLI (`npm install -g wrangler`)
- Cloudflare Account (free tier supported)

### Installation

```bash
git clone https://github.com/br1dia/bardia.git
cd bardia
npm install
```

### Deployment

```bash
npm run deploy
```

## 📁 Project Structure

```
bardia/
├── src/
│   ├── index.ts              # Main worker entry
│   ├── types.ts              # TypeScript interfaces
│   ├── constants.ts          # Global constants
│   ├── routes/               # API routes
│   ├── analytics/            # Traffic analysis engine
│   ├── rules/                # Custom rule engine
│   └── utils/                # Helper functions
├── dashboard/                # Web dashboard UI
├── wrangler.toml             # Cloudflare config
├── package.json              # Dependencies
└── README.md
```

## 🔧 Configuration

See `wrangler.toml` for complete configuration options.

## 📝 License

MIT License

## 🤝 Contributing

Contributions are welcome! Please open a Pull Request.

---

**Made with ❤️ by br1dia**
