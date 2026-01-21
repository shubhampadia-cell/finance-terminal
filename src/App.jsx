import React, { useState } from 'react';

/*
═══════════════════════════════════════════════════════════════════════════════
  HOW TO ADD POSTS
  
  Just add new objects to the POSTS array below. Format:
  
  {
    id: [next number],
    title: "Your post title",
    category: "one of the categories below",
    date: "2026-01-22",
    content: `Your full post content here. 
    
    Can be multiple paragraphs.
    
    Use markdown-style formatting in your head - 
    we'll add proper rendering later.`
  }
  
  CATEGORIES: telegram | newspaper | niif | sovrenn | thesis | screening | reports | poker | books | misc
═══════════════════════════════════════════════════════════════════════════════
*/

const POSTS = [
  {
    id: 1,
    title: "RBI holds rates, shifts stance to neutral",
    category: "newspaper",
    date: "2026-01-22",
    content: `The RBI maintained repo rate at 6.5% but shifted stance from "withdrawal of accommodation" to "neutral" - first shift since February 2023.

Key implications:
• Door now open for rate cuts in Q1 FY27
• Inflation projected at 4.5% for FY26
• GDP growth estimate unchanged at 7.2%

What this means for portfolios: Duration play becoming attractive. Long-term gilt funds may outperform over next 12 months if cuts materialize.

Banks with high CASA ratios (HDFC, Kotak) better positioned than those dependent on wholesale funding.`
  },
  {
    id: 2,
    title: "Adani Green: Capacity addition on track",
    category: "screening",
    date: "2026-01-22",
    content: `Tracking AGEL for potential entry.

Current installed capacity: 10.9 GW
FY26 target: 14.2 GW
Progress: 2.1 GW added in 9M

Positives:
• Execution consistency despite Hindenburg
• PPA visibility for next 25 years
• Lowest tariff bidder in recent auctions

Concerns:
• Leverage still elevated (Net Debt/EBITDA ~6x)
• Related party complexity
• Governance overhang

Entry thesis: Wait for debt/equity ratio improvement OR significant price correction (30%+ from current levels).`
  },
  {
    id: 3,
    title: "Sovrenn Framework: Management Quality Signals",
    category: "sovrenn",
    date: "2026-01-21",
    content: `Extracting Sovrenn's implicit framework for evaluating management:

1. CAPITAL ALLOCATION HISTORY
   - Look at 5-year capex vs returns generated
   - Red flag: Empire building with declining ROCE
   - Green flag: Disciplined expansion, consistent buybacks at low valuations

2. COMMUNICATION PATTERNS
   - Compare guidance vs actuals over 3 years
   - Do they acknowledge mistakes in con-calls?
   - Promotional language vs substance ratio

3. SKIN IN THE GAME
   - Promoter buying at market price (not options)
   - Salary relative to company size
   - Family members on payroll doing real work?

4. RELATED PARTY TRANSACTIONS
   - Not just existence, but trend direction
   - Are they simplifying or complicating structure?

Apply this to every new screening candidate.`
  },
  {
    id: 4,
    title: "Morning Brief",
    category: "telegram",
    date: "2026-01-22",
    content: `Global cues: US futures flat, Europe mixed. Dollar index at 103.2.

Asia: Nikkei +0.8% on BOJ hold. Hang Seng -0.3% on property concerns.

Domestic: SGX Nifty indicating flat open. FII sold ₹2,100cr yesterday (5th consecutive day).

Commodities: Brent at $82.4. Gold holding $2,650.

Key events today:
• India Dec trade data (11:00 AM)
• US weekly jobless claims
• ECB Lagarde speech`
  },
  {
    id: 5,
    title: "Position Sizing: The Kelly Criterion Simplified",
    category: "poker",
    date: "2026-01-20",
    content: `From "The Theory of Poker" - applicable to both poker and investing:

Kelly Formula: f* = (bp - q) / b

Where:
• f* = fraction of bankroll to bet
• b = odds received (payout ratio)
• p = probability of winning
• q = probability of losing (1-p)

Example: 
You estimate 60% chance of winning a hand where you'd win 2x your bet.
f* = (2 × 0.6 - 0.4) / 2 = 0.4 or 40% of bankroll

In practice: Most professionals use "half Kelly" or "quarter Kelly" to reduce variance.

Investment parallel: This is why conviction matters. High conviction (higher p) + good odds (higher b) = larger position size. Low conviction = small position or pass.`
  },
  {
    id: 6,
    title: "Howard Marks: Second-Level Thinking",
    category: "books",
    date: "2026-01-19",
    content: `From "The Most Important Thing" - Chapter 1

First-level thinking: "It's a good company, let's buy."
Second-level thinking: "It's a good company, but everyone thinks it's great. It's overrated and overpriced. Let's sell."

The key insight: First-level thinking is simplistic and superficial. Second-level thinking is deep, complex, and convoluted.

Questions for second-level thinking:
• What is the range of likely outcomes?
• What's the consensus expectation?
• How does my expectation differ?
• How does the price compare to consensus vs my view?
• Is the consensus psychology overly optimistic or pessimistic?

"You can't do the same things others do and expect to outperform."

Application: Before every buy, write down what the market thinks vs what you think. If they're the same, you don't have an edge.`
  },
  {
    id: 7,
    title: "NIIF Infrastructure Report - December 2025",
    category: "niif",
    date: "2026-01-15",
    content: `Monthly infrastructure pulse - key highlights:

ROADS & HIGHWAYS
• NHAI awarded 847 km in Dec (vs 612 km Nov)
• HAM projects seeing better traction than BOT
• Land acquisition bottleneck easing in MP, Rajasthan

POWER & ENERGY
• Thermal PLF improved to 68.3% (66.1% Nov)
• RE addition: 1.8 GW solar, 0.4 GW wind
• Battery storage tenders: 2.5 GWh announced

PORTS & LOGISTICS
• Major ports traffic: +8.2% YoY
• Sagarmala disbursements accelerated
• JNPT capacity expansion Phase 2 commissioned

URBAN INFRA
• Metro operational network crossed 900 km
• Smart cities: 78% fund utilization (improved from 71%)

Policy watch: PM Gati Shakti integration showing results in faster clearances. Inter-ministerial coordination improved.`
  },
  {
    id: 8,
    title: "Thesis: Kaynes Technology",
    category: "thesis",
    date: "2026-01-18",
    content: `POSITION: Invested at ₹4,200 | Current: ₹5,100 | Target: ₹7,500

CORE THESIS:
India's electronics manufacturing is at an inflection point. Kaynes is the highest-quality EMS play with:

1. Customer quality: Defense, aerospace, medical (sticky, high-margin)
2. Vertical integration: PCB + box build + design services
3. Capacity expansion: 3x capacity coming online by FY27
4. Management: Founder-led, 25-year track record

KEY METRICS TO WATCH:
• Order book growth (currently 2.2x TTM revenue)
• Margin expansion as product mix improves
• Design services revenue %
• Defense revenue share

RISKS:
• Valuation (60x forward PE) leaves no room for error
• Customer concentration (top 5 = 45%)
• Execution on new facilities

REVIEW TRIGGER: Sell if order book growth slows below 25% or margins compress for 2 consecutive quarters.`
  },
  {
    id: 9,
    title: "Eicher Motors: VECV Demerger Analysis",
    category: "reports",
    date: "2026-01-17",
    content: `Analyzing the announced VECV (Volvo-Eicher JV) demerger:

CURRENT STRUCTURE:
Eicher Motors owns:
• 100% Royal Enfield (motorcycles)
• 54.4% VECV (commercial vehicles JV with Volvo)

PROPOSED CHANGE:
VECV to be demerged and listed separately.

VALUATION IMPLICATIONS:

Royal Enfield standalone:
• Revenue: ~₹15,000 cr
• EBITDA margin: ~27%
• Fair value: ₹3,800-4,200/share

VECV standalone:
• Revenue: ~₹18,000 cr (full entity)
• Eicher's 54.4% stake value: ₹600-800/share

Sum-of-parts: ₹4,400-5,000 vs CMP ₹4,650

CONCLUSION: Demerger is value-neutral to slightly negative at current prices. The market already prices in RE premium. VECV will trade at CV sector multiples (lower).

Watch for: Demerger ratio and tax implications.`
  },
  {
    id: 10,
    title: "Evening Brief",
    category: "telegram",
    date: "2026-01-21",
    content: `Market close: Nifty 23,045 (-0.3%) | Sensex 76,123 (-0.25%)

Sectoral: PSU Banks +1.2%, IT -0.8%, Realty -1.1%

Top gainers: BPCL, SBI, Coal India
Top losers: Infosys, TCS, DLF

FII: Net sellers ₹1,890 cr
DII: Net buyers ₹2,340 cr

Crude: Brent closed at $82.1 (-0.4%)

Global: US markets closed mixed. Fed speakers maintained hawkish tone.

Tomorrow watch:
• Dec trade deficit data (expecting $22-24bn)
• Weekly expiry positioning
• Q3 earnings: HDFC Bank, Infosys`
  }
];

const CATEGORIES = {
  all: { label: "All", color: "#a3a3a3" },
  telegram: { label: "Telegram", color: "#60a5fa" },
  newspaper: { label: "Newspaper", color: "#f472b6" },
  niif: { label: "NIIF", color: "#4ade80" },
  sovrenn: { label: "Sovrenn", color: "#c084fc" },
  thesis: { label: "Thesis", color: "#fbbf24" },
  screening: { label: "Screening", color: "#fb923c" },
  reports: { label: "Reports", color: "#2dd4bf" },
  poker: { label: "Poker", color: "#f87171" },
  books: { label: "Books", color: "#a78bfa" },
  misc: { label: "Misc", color: "#9ca3af" }
};

const FinanceTerminal = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = activeFilter === 'all' 
    ? POSTS 
    : POSTS.filter(p => p.category === activeFilter);

  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // POST DETAIL VIEW
  if (selectedPost) {
    const cat = CATEGORIES[selectedPost.category];
    return (
      <div style={styles.container}>
        <button 
          onClick={() => setSelectedPost(null)} 
          style={styles.backButton}
        >
          ← Back to feed
        </button>
        
        <article style={styles.article}>
          <div style={styles.articleMeta}>
            <span style={{...styles.articleTag, backgroundColor: cat.color + '22', color: cat.color}}>
              {cat.label}
            </span>
            <span style={styles.articleDate}>{selectedPost.date}</span>
          </div>
          
          <h1 style={styles.articleTitle}>{selectedPost.title}</h1>
          
          <div style={styles.articleContent}>
            {selectedPost.content.split('\n').map((para, i) => (
              <p key={i} style={para.trim() === '' ? styles.spacer : styles.paragraph}>
                {para}
              </p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  // MAIN FEED VIEW
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.logo}>Terminal</h1>
        <p style={styles.tagline}>research · thesis · gut</p>
      </header>

      {/* Filter Tags */}
      <div style={styles.filterContainer}>
        <div style={styles.filterScroll}>
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              style={{
                ...styles.filterTag,
                backgroundColor: activeFilter === key ? cat.color : 'transparent',
                color: activeFilter === key ? '#0a0a0a' : cat.color,
                borderColor: cat.color,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feed */}
      <main style={styles.feed}>
        {sortedPosts.map((post) => {
          const cat = CATEGORIES[post.category];
          const preview = post.content.slice(0, 120) + (post.content.length > 120 ? '...' : '');
          
          return (
            <article 
              key={post.id} 
              style={styles.card}
              onClick={() => setSelectedPost(post)}
            >
              <div style={styles.cardHeader}>
                <span style={{...styles.cardTag, color: cat.color}}>
                  {cat.label}
                </span>
                <span style={styles.cardDate}>{post.date}</span>
              </div>
              
              <h2 style={styles.cardTitle}>{post.title}</h2>
              
              <p style={styles.cardPreview}>{preview}</p>
            </article>
          );
        })}
      </main>

      {/* Post Count */}
      <footer style={styles.footer}>
        <span style={styles.footerText}>
          {sortedPosts.length} post{sortedPosts.length !== 1 ? 's' : ''}
          {activeFilter !== 'all' && ` in ${CATEGORIES[activeFilter].label}`}
        </span>
      </footer>
    </div>
  );
};

// Import fonts in your HTML head:
// <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0c0c0c',
    color: '#e5e5e5',
    fontFamily: "'Newsreader', Georgia, serif",
    paddingBottom: '80px',
  },
  // Header
  header: {
    padding: '32px 20px 24px',
    borderBottom: '1px solid #262626',
  },
  logo: {
    fontSize: '13px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '500',
    letterSpacing: '6px',
    textTransform: 'uppercase',
    color: '#737373',
    margin: 0,
  },
  tagline: {
    fontSize: '28px',
    fontFamily: "'Newsreader', Georgia, serif",
    fontWeight: '400',
    fontStyle: 'italic',
    color: '#fafafa',
    margin: '8px 0 0 0',
    letterSpacing: '-0.5px',
  },
  // Filters
  filterContainer: {
    padding: '16px 0',
    borderBottom: '1px solid #262626',
    position: 'sticky',
    top: 0,
    backgroundColor: '#0c0c0c',
    zIndex: 100,
  },
  filterScroll: {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    padding: '0 20px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  filterTag: {
    padding: '6px 14px',
    borderRadius: '20px',
    border: '1px solid',
    fontSize: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '500',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s ease',
  },
  // Feed
  feed: {
    padding: '8px 20px',
  },
  card: {
    padding: '20px 0',
    borderBottom: '1px solid #1a1a1a',
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '10px',
  },
  cardTag: {
    fontSize: '11px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  cardDate: {
    fontSize: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#525252',
  },
  cardTitle: {
    fontSize: '19px',
    fontWeight: '600',
    color: '#fafafa',
    margin: '0 0 10px 0',
    lineHeight: 1.35,
    letterSpacing: '-0.3px',
  },
  cardPreview: {
    fontSize: '15px',
    color: '#737373',
    margin: 0,
    lineHeight: 1.5,
  },
  // Footer
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px 20px',
    backgroundColor: '#0c0c0c',
    borderTop: '1px solid #262626',
  },
  footerText: {
    fontSize: '11px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#525252',
    letterSpacing: '1px',
  },
  // Back Button
  backButton: {
    display: 'block',
    background: 'none',
    border: 'none',
    color: '#737373',
    fontSize: '13px',
    fontFamily: "'JetBrains Mono', monospace",
    padding: '20px',
    cursor: 'pointer',
  },
  // Article View
  article: {
    padding: '0 20px 40px',
  },
  articleMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  articleTag: {
    fontSize: '11px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    padding: '4px 10px',
    borderRadius: '4px',
  },
  articleDate: {
    fontSize: '12px',
    fontFamily: "'JetBrains Mono', monospace",
    color: '#525252',
  },
  articleTitle: {
    fontSize: '26px',
    fontWeight: '600',
    color: '#fafafa',
    margin: '0 0 28px 0',
    lineHeight: 1.25,
    letterSpacing: '-0.5px',
  },
  articleContent: {
    fontSize: '17px',
    lineHeight: 1.75,
    color: '#d4d4d4',
  },
  paragraph: {
    margin: '0 0 16px 0',
  },
  spacer: {
    margin: '0 0 8px 0',
  },
};

export default FinanceTerminal;
