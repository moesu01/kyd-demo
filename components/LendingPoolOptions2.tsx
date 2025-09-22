
// Image assets from Figma
const imgRectangle52 = "http://localhost:3845/assets/5936c381171449d6833b99668fb51e36d3029e96.png";
const imgRectangle53 = "http://localhost:3845/assets/9c5909aa7d380d35410094c93e5deff28f368440.png";
const imgRectangle54 = "http://localhost:3845/assets/488d74582099b3a7e5754cbef6eca5906c55c1b7.png";
const imgVector = "http://localhost:3845/assets/dd45389bea34be2494976b39837b3f97cc833550.svg";
const imgVector1 = "http://localhost:3845/assets/7109d8805b3e8d17fd04bfd75272e775f331dd72.svg";
const imgVector2 = "http://localhost:3845/assets/9c06145a59937c12a739907741ac364d4d92e14c.svg";

// Shared styling constants for consistent theming
const SHARED_STYLES = {
  card: {
    container: "backdrop-blur-[19.85px] backdrop-filter bg-white box-border flex flex-col h-auto items-start justify-between overflow-clip px-8 pt-6 pb-2 relative rounded-[16px] shadow-[0px_4px_22.1px_0px_rgba(85,56,106,0.15),0px_1px_3px_0px_rgba(0,0,0,0.2)] w-full transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0px_8px_32px_0px_rgba(85,56,106,0.25)]",
    backgroundBlur: "absolute bg-center bg-cover bg-no-repeat blur-[25px] bottom-0 filter left-[-162px] opacity-20 size-[745px]",
    icon: "absolute h-[25px] right-[20px] top-[20px] w-[44px]",
    title: {
      base: "[text-shadow:rgba(255,255,255,0.5)_0px_-2px_2px] capitalize flex flex-col justify-center leading-[1.1] min-w-full not-italic relative shrink-0 text-[32px] tracking-[-2%]",
      subtitle: "not-italic text-opacity-70"
    },
    artistSection: "box-border content-stretch flex flex-col gap-[6px] items-start justify-start leading-[0] not-italic px-0 py-[12px] relative rounded-[14px] shrink-0 text-[#001d4d] w-full",
    artistLabel: "flex flex-col font-bold justify-center relative shrink-0 text-[16px] w-full",
    artistNames: "font-medium relative shrink-0 text-[18px] w-full",
    image: "w-full",
    imageContainer: "bg-center bg-cover bg-no-repeat rounded-[4px] w-full h-auto aspect-[4/3] mb-6",
    features: "relative w-full",
    featureItem: "px-0 py-[12px] relative shrink-0 w-full border-t border-solid break-words tracking-[0px]",
    featureText: "leading-[1.4] text-[14px]",
    featureTextBold: "font-bold"
  },
  header: {
    container: "flex flex-col lg:flex-row items-start lg:items-center justify-between h-full w-full max-w-7xl mx-auto px-0 py-0 border-t border-[#444444] pt-6",
    // border: "border-t border-[#444444] mb-8 lg:mb-0",
    leftSection: "flex flex-col items-start justify-start w-full lg:w-auto text-left",
    label: "flex flex-col font-bold justify-start not-italic relative shrink-0 text-[14px] leading-[1.2] tracking-[3%] lg:text-[19px] text-[rgba(0,0,0,0.6)] text-left",
    titleSection: "flex flex-col gap-3 lg:gap-0 items-start justify-start w-full lg:w-auto",
    title: "capitalize font-black text-[#111111] text-[36px] text-left",
    subtitle: "relative shrink-0 text-[16px] lg:text-[20px] text-[rgba(17,17,17,0.64)] text-left max-w-[600px]",
    ctaButton: "bg-[#111111] box-border content-stretch flex gap-[12px] isolate items-center justify-center overflow-clip px-[20px] lg:px-[24px] py-[14px] lg:py-[16px] relative rounded-[8px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08),0px_4px_40px_0px_rgba(0,89,7,0.48)] shrink-0 cursor-pointer hover:shadow-[0px_2px_30px_0px_rgba(211,242,39,0.6)] transition-all duration-300 mt-6 lg:mt-0",
    ctaText: "[text-shadow:rgba(0,89,7,0.48)_0px_4px_40px,rgba(0,0,0,0.08)_0px_1px_3px] flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] lg:text-[19px] text-center text-nowrap text-white z-[3]",
    ctaBlur: "absolute blur-[25px] bottom-[-211px] filter left-[-25px] size-[310px] z-[1]"
  },
  cardsContainer: "w-full max-w-7xl mx-auto p-0"
};

// Card-specific color themes
const CARD_THEMES = {
  general: {
    titleColor: "#001d4d",
    subtitleColor: "rgba(0,29,77,0.7)",
    borderColor: "rgba(0,29,77,0.5)",
    textColor: "#001d4d"
  },
  electronic: {
    titleColor: "#3b0f3e",
    subtitleColor: "rgba(59,15,62,0.7)",
    borderColor: "rgba(59,15,62,0.5)",
    textColor: "#3b0f3e"
  },
  rock: {
    titleColor: "#004d2a",
    subtitleColor: "rgba(0,77,42,0.7)",
    borderColor: "rgba(0,77,42,0.5)",
    textColor: "#004d2a"
  }
};

interface PoolCardProps {
  title: string;
  subtitle: string;
  artistNames: string;
  image: string;
  icon: string;
  theme: keyof typeof CARD_THEMES;
  features: Array<{
    text: string;
    boldParts?: string[];
  }>;
}

function PoolCard({ title, subtitle, artistNames, image, icon, theme, features }: PoolCardProps) {
  const themeColors = CARD_THEMES[theme];
  
  return (
    <div className={SHARED_STYLES.card.container}>
      {/* Background blur effect */}
      <div 
        className={SHARED_STYLES.card.backgroundBlur}
        style={{ backgroundImage: `url('${image}')` }}
      />
      
      {/* Icon */}
      <div className={SHARED_STYLES.card.icon}>
        <div className="absolute bottom-0 left-[-4.55%] right-[-4.55%] top-[-16%]">
          <img alt="" className="block max-w-none size-full" src={icon} />
        </div>
      </div>
      
      {/* Title */}
      <div 
        className={SHARED_STYLES.card.title.base}
        style={{ color: themeColors.titleColor }}
      >
        <p>
          <span>{title}</span>
          <br aria-hidden="true" />
          <span className={SHARED_STYLES.card.title.subtitle} style={{ color: themeColors.subtitleColor }}>
            {subtitle}
          </span>
        </p>
      </div>
      
      {/* Artist section */}
      <div className={SHARED_STYLES.card.artistSection}>
        <div className={SHARED_STYLES.card.artistLabel}>
          <p className="leading-[1.2]">Earn from artists like:</p>
        </div>
        <div className={SHARED_STYLES.card.artistNames}>
          <p className="leading-[1.2]">{artistNames}</p>
        </div>
      </div>
      
      {/* Image */}
      <div className={SHARED_STYLES.card.image}>
        <div 
          className={SHARED_STYLES.card.imageContainer}
          style={{ backgroundImage: `url('${image}')` }}
        />
      </div>
      
      {/* Features */}
      <div className={SHARED_STYLES.card.features}>
        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={SHARED_STYLES.card.featureItem}
              style={{ borderColor: themeColors.borderColor }}
            >
              <div 
                className={SHARED_STYLES.card.featureText}
                style={{ color: themeColors.textColor }}
              >
                <p>
                  {feature.boldParts ? (
                    <>
                      {feature.text.split(' ').map((word, wordIndex) => {
                        const isBold = feature.boldParts?.includes(word);
                        return isBold ? (
                          <span key={wordIndex} className={SHARED_STYLES.card.featureTextBold}>
                            {word}{' '}
                          </span>
                        ) : (
                          <span key={wordIndex}>{word}{' '}</span>
                        );
                      })}
                    </>
                  ) : (
                    feature.text
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeaderSection({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div className={SHARED_STYLES.header.container}>
      {/* <div className={SHARED_STYLES.header.border} /> */}
      
      <div className={SHARED_STYLES.header.leftSection}>
        {/* <div className={SHARED_STYLES.header.label}>
          <p >LENDING POOL</p>
        </div> */}
        
        <div className={SHARED_STYLES.header.titleSection}>
          <div className={SHARED_STYLES.header.title}>
            <p>Opportunities Across Every Stage</p>
          </div>
          
          <div className={SHARED_STYLES.header.subtitle}>
            <p>
              Yield across all flavors of live concerts from the world's biggest acts
            </p>
          </div>
        </div>
      </div>
      
      <div className={SHARED_STYLES.header.ctaButton} onClick={onNavigateToDashboard}>
        <div className={SHARED_STYLES.header.ctaText}>
          <p className="leading-[1.2] whitespace-pre">Start Earning</p>
        </div>
        <div className={SHARED_STYLES.header.ctaBlur} />
      </div>
    </div>
  );
}

function PoolCardsGrid() {
  const poolData: PoolCardProps[] = [
    {
      title: "KYD General",
      subtitle: "All Venue Pool",
      artistNames: "Drake, Taylor Swift, Bad Bunny, and more",
      image: imgRectangle52,
      icon: imgVector,
      theme: "general",
      features: [
        {
          text: "Earn 12% APR • Stable yields on USDC / USDT"
        },
        {
          text: "Earn $KYD Rewards from ALL venues in our network, across genres"
        }
      ]
    },
    {
      title: "Electronic Music",
      subtitle: "Genre Venue Pool",
      artistNames: "Drake, Taylor Swift, Bad Bunny, and more",
      image: imgRectangle53,
      icon: imgVector1,
      theme: "electronic",
      features: [
        {
          text: "Earn 12% APR • Stable yields on USDC / USDT"
        },
        {
          text: "Earn $KYD Rewards from ALL venues in our network, across electronic music genre",
          boldParts: ["ALL", "venues", "electronic", "music", "genre"]
        }
      ]
    },
    {
      title: "Rock & Roll",
      subtitle: "General Venue Pool",
      artistNames: "Drake, Taylor Swift, Bad Bunny, and more",
      image: imgRectangle54,
      icon: imgVector2,
      theme: "rock",
      features: [
        {
          text: "Earn 12% APR • Stable yields on USDC / USDT"
        },
        {
          text: "Earn $KYD Rewards from ALL venues in our network, across genres"
        }
      ]
    }
  ];

  return (
    <div className={SHARED_STYLES.cardsContainer}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
        {poolData.map((pool, index) => (
          <PoolCard
            key={index}
            title={pool.title}
            subtitle={pool.subtitle}
            artistNames={pool.artistNames}
            image={pool.image}
            icon={pool.icon}
            theme={pool.theme}
            features={pool.features}
          />
        ))}
      </div>
    </div>
  );
}

export function LendingPoolOptions2({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div
      className="
        bg-[rgba(255,255,255,0.95)]
        backdrop-blur-[20px]
        backdrop-saturate-300
        backdrop-contrast-190
        backdrop-brightness-100
        w-full
        min-h-screen
        flex
        flex-col
        items-center
        justify-start
        gap-12
        py-12
        px-4
        font-['ABC_Diatype_Unlicensed_Trial:Regular',_'Helvetica',_sans-serif]
      "
      data-name="mid piece"
    >
    
      <HeaderSection onNavigateToDashboard={onNavigateToDashboard} />
      <PoolCardsGrid />
    </div>
  );
}

// Export shared styles for use in other components
export { SHARED_STYLES };
