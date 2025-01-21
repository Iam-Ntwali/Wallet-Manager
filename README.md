# WalletManager: Personal Finance Management System

WalletManager is a modern financial management application that helps users track expenses, manage budgets, and gain insights into their spending habits.

## Key Features

- **Multi-Account Management**: Track multiple wallets (e.g., bank accounts, credit cards)
- **Transaction Tracking**: Record and categorize income and expenses
- **Budget Planning**: Create and monitor budgets by category
- **Analytics Dashboard**: Visual insights into spending patterns
- **Data Export**: Download transaction history in CSV
- **Responsive Design**: Seamless experience across all devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Prisma ORM
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Data Export**: jsPDF, CSV
- **Form Handling**: React Hook Form & Zod
- **Date Handling**: date-fns

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Iam-Ntwali/Wallet-Manager.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
Rename `.env.template` to `.env`
Update the values with your own configurations
- DATABASE_URL="your_mongodb_url"
- AUTH_GOOGLE_ID="your_google_client_id"
- AUTH_GOOGLE_SECRET="your_google_client_secret"
- AUTH_SECRET="generate_your_auth_secret"
```

4. Run database migrations(ORM):

```bash
npx prisma init
npx prisma db push
```

5. Start the development server:

```bash
npm run dev
```

6. Open your browser and visit `http://localhost:3000`

## Live Demo

Link [Click Here](https://wm-coa.netlify.app)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
