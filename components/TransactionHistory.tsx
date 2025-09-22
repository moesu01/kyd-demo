// External link icon SVG
const ExternalLinkIcon = () => (
  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L1 9" stroke="#4f81c9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface Transaction {
  id: string;
  address: string;
  type: string;
  date: string;
  amount: string;
  txHash: string;
}

const DUMMY_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    address: "0x234...a913",
    type: "Distribution",
    date: "May 4 '25",
    amount: "+$34.40",
    txHash: "0x1234567890abcdef"
  },
  {
    id: "2",
    address: "0x456...b824",
    type: "Distribution",
    date: "May 3 '25",
    amount: "+$28.75",
    txHash: "0x2345678901bcdef0"
  },
  {
    id: "3",
    address: "0x789...c735",
    type: "Distribution",
    date: "May 2 '25",
    amount: "+$42.15",
    txHash: "0x3456789012cdef01"
  },
  {
    id: "4",
    address: "0xabc...d646",
    type: "Distribution",
    date: "May 1 '25",
    amount: "+$31.20",
    txHash: "0x4567890123def012"
  },
  {
    id: "5",
    address: "0xdef...e557",
    type: "Distribution",
    date: "Apr 30 '25",
    amount: "+$39.85",
    txHash: "0x5678901234ef0123"
  },
  {
    id: "6",
    address: "0x123...f468",
    type: "Distribution",
    date: "Apr 29 '25",
    amount: "+$25.60",
    txHash: "0x6789012345f01234"
  },
  {
    id: "7",
    address: "0x456...a379",
    type: "Distribution",
    date: "Apr 28 '25",
    amount: "+$47.30",
    txHash: "0x7890123456012345"
  },
  {
    id: "8",
    address: "0x789...b28a",
    type: "Distribution",
    date: "Apr 27 '25",
    amount: "+$33.90",
    txHash: "0x8901234567123456"
  },
  {
    id: "9",
    address: "0xabc...c19b",
    type: "Distribution",
    date: "Apr 26 '25",
    amount: "+$29.45",
    txHash: "0x9012345678234567"
  },
  {
    id: "10",
    address: "0xdef...d0ac",
    type: "Distribution",
    date: "Apr 25 '25",
    amount: "+$36.75",
    txHash: "0x0123456789345678"
  },
  {
    id: "11",
    address: "0x234...e1bd",
    type: "Distribution",
    date: "Apr 24 '25",
    amount: "+$41.20",
    txHash: "0x1234567890456789"
  },
  {
    id: "12",
    address: "0x567...f2ce",
    type: "Distribution",
    date: "Apr 23 '25",
    amount: "+$27.85",
    txHash: "0x2345678901567890"
  },
  {
    id: "13",
    address: "0x890...a3df",
    type: "Distribution",
    date: "Apr 22 '25",
    amount: "+$35.60",
    txHash: "0x3456789012678901"
  },
  {
    id: "14",
    address: "0xabc...b4e0",
    type: "Distribution",
    date: "Apr 21 '25",
    amount: "+$38.95",
    txHash: "0x4567890123789012"
  },
  {
    id: "15",
    address: "0xdef...c5f1",
    type: "Distribution",
    date: "Apr 20 '25",
    amount: "+$32.40",
    txHash: "0x5678901234890123"
  }
];

interface TransactionRowProps {
  transaction: Transaction;
}

function TransactionRow({ transaction }: TransactionRowProps) {
  const handleTxClick = () => {
    console.log(`Opening transaction: ${transaction.txHash}`);
    // In a real app, this would open the transaction in a block explorer
  };

  return (
    <div className="flex flex-col md:flex-row md:h-11 items-start md:items-center justify-between px-0 py-3 md:py-3 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#dddddd] border-b inset-0 pointer-events-none" />
      
      {/* Mobile Layout - 2 lines */}
      <div className="flex flex-col md:hidden gap-1 w-full">
        {/* Line 1: Address and Type */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2.5 items-center justify-start relative shrink-0">
            <div className="flex flex-col font-geist-mono justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#888888] text-sm text-nowrap tracking-[-0.7px]">
              <p className="leading-[1.2] overflow-ellipsis overflow-hidden whitespace-pre">
                {transaction.address}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2.5 items-center justify-start relative shrink-0">
            <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#888888] text-sm text-nowrap">
              <p className="leading-[1.2] whitespace-pre">{transaction.type}</p>
            </div>
          </div>
        </div>
        
        {/* Line 2: Date, Amount, and Tx Link */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2.5 items-center justify-start relative shrink-0">
            <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#444444] font-medium text-sm text-nowrap">
              <p className="leading-[1.2] whitespace-pre">{transaction.date}</p>
            </div>
          </div>
          
          <div className="flex gap-2.5 items-center justify-start relative shrink-0">
            <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 font-medium text-[#444444] text-sm text-nowrap">
              <p className="leading-[1.2] whitespace-pre">{transaction.amount}</p>
            </div>
            <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#4f81c9] text-sm text-nowrap">
              <p className="leading-[1.2] underline whitespace-pre">Tx</p>
            </div>
            <div className="h-2.5 relative shrink-0 w-1.5">
              <ExternalLinkIcon />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Desktop Layout - Single line */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Address */}
        <div className="flex gap-2.5 items-center justify-start relative shrink-0 w-[92px]">
          <div className="flex flex-col font-geist-mono justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#888888] text-sm text-nowrap tracking-[-0.7px]">
            <p className="leading-[1.2] overflow-ellipsis overflow-hidden whitespace-pre">
              {transaction.address}
            </p>
          </div>
        </div>
        
        {/* Type */}
        <div className="flex gap-2.5 items-center justify-start relative shrink-0 w-[120px]">
          <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#666666] text-sm text-nowrap">
            <p className="leading-[1.2] whitespace-pre">{transaction.type}</p>
          </div>
        </div>
        
        {/* Spacer */}
        <div className="flex gap-2.5 items-center justify-start shrink-0 w-[130px]" />
        
        {/* Date */}
        <div className="flex gap-2.5 items-center justify-start relative shrink-0 w-[80px]">
          <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#444444] font text-sm text-nowrap text-right">
            <p className="leading-[1.2] whitespace-pre">{transaction.date}</p>
          </div>
        </div>
        
        {/* Amount */}
        <div className="flex gap-2.5 items-center justify-start relative shrink-0 w-[80px]">
          <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#444444] font-medium text-sm text-nowrap">
            <p className="leading-[1.2] whitespace-pre">{transaction.amount}</p>
          </div>
        </div>
        
        {/* Transaction Link */}
        <div className="flex gap-1.5 items-center justify-end relative shrink-0 cursor-pointer" onClick={handleTxClick}>
          <div className="flex flex-col font-inter justify-center leading-[0] relative shrink-0 text-[#4f81c9] text-sm text-nowrap">
            <p className="leading-[1.2] underline whitespace-pre">Tx</p>
          </div>
          <div className="h-2.5 relative shrink-0 w-1.5">
            <ExternalLinkIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TransactionHistory() {
  return (
    <div className="flex flex-col items-start justify-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-full">
        <div className="bg-clip-padding border-0 border-transparent border-solid box-border flex flex-col gap-0.5 items-start justify-start relative w-full">
          {DUMMY_TRANSACTIONS.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
