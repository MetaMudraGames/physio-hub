# PhysioHub 🫀

**Interactive physiology learning platform for medical and biology students**

Learn how the body works by manipulating parameters and watching systems respond in real-time. Built mobile-first for studying on the go.

## 🎯 Features

- **Interactive Simulations** - Adjust sliders, see instant feedback
- **Visual Learning** - Animations that make complex concepts click
- **Mobile-First** - Designed for learning on your phone
- **Bite-Sized Modules** - 5-10 minute sessions per topic

## 📚 Available Modules

### Renal System
- Counter-Current Multiplier
- Glomerular Filtration Rate (GFR)
- Tubular Reabsorption

### Cardiac System
- Cardiac Cycle Animation
- Pressure-Volume Loops
- Conduction System

### Respiratory System
- Spirometry Simulation
- Gas Exchange
- V/Q Matching

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/MetaMudraGames/physio-hub.git
cd physio-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🛠 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts**: D3.js, Recharts
- **Hosting**: Cloudflare Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── shared/        # Reusable UI (Slider, Graph, QuizCard)
│   ├── modules/       # Physiology simulations by system
│   │   ├── Renal/
│   │   ├── Cardiac/
│   │   └── Respiratory/
│   └── games/         # Interactive exercises
├── hooks/             # Custom React hooks
├── utils/             # Helpers & formulas
└── data/              # Content configuration
```

## 🧪 Development

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Check for errors
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use for educational purposes!

---

**Made by [MetaMudra Games](https://github.com/MetaMudraGames)**
