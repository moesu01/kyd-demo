import { useState } from "react";
import { imgStar1 } from "../imports/svg-62ovv";

// Replace Figma asset imports with Unsplash images
const imgRectangle52 =
  "https://images.unsplash.com/photo-1577206717686-166514e617b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBmZXN0aXZhbCUyMGNyb3dkJTIwbmVvbnxlbnwxfHx8fDE3NTY5Njc2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle53 =
  "https://images.unsplash.com/photo-1633966448341-4b8e20e6ddd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhkaiUyMGNvbmNlcnQlMjBzdGFnZSUyMGxpZ2h0cyUyMGNyb3dkfGVufDF8fHx8MTc1NzAzNDc1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgRectangle54 =
  "https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyb2NrJTIwYmFuZCUyMGNvbmNlcnQlMjBzdGFnZXxlbnwxfHx8fDE3NTcwMzQ3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// Shared styling constants for consistent theming
const SHARED_STYLES = {
  poolCard: {
    container: {
      base: "bg-[rgba(61,61,61,0.76)] box-border content-stretch flex flex-col gap-8 h-[auto] md:h-[auto] lg:h-[auto] items-start justify-between overflow-clip px-[20px] md:px-[30px] py-[25px] md:py-[33px] relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] w-full max-w-[420px] transition-all duration-150 ease-in-out cursor-pointer group",
      hover: {
        transform: "scale(1.05) translateY(-10px)",
        boxShadow: "0px 20px 40px 0px rgba(0,0,0,0.4)",
      },
      default: {
        transform: "scale(1) translateY(0px)",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.08)",
      },
    },
    image: {
      base: "bg-center bg-cover bg-no-repeat h-[250px] md:h-[300px] lg:h-[360px] relative rounded-[2px] shrink-0 w-full transition-all duration-300 ease-out overflow-hidden border-[6px] border-solid inset-0 rounded-[2px]",
      hover: {
        filter:
          "grayscale(0) saturate(1.2) brightness(1.05) contrast(1.1)",
        transform: "scale(1.025)",
        border: "#FFF",
      },
      default: {
        filter: "grayscale(1) saturate(0.3) brightness(0.7)",
        transform: "scale(1)",
        border: "#d9d9d9",
      },
    },
    text: {
      description:
        "[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] font-['ABC_Diatype_Mono_Unlicensed_Trial:Bold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[10px] md:text-[12px] text-[rgba(255,255,255,0.4)] text-justify tracking-[-0.36px] uppercase w-full",
      title:
        "[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] capitalize flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] justify-center not-italic relative shrink-0 text-[28px] md:text-[36px] text-white tracking-[-1.08px] w-full",
      feature:
        "[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] flex flex-col font-['ABC_Diatype_Mono_Unlicensed_Trial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] md:text-[16px] text-white tracking-[-0.48px]",
    },
  },
  header: {
    title:
      "[text-shadow:rgba(0,0,0,0.3)_0px_4px_10px] bg-clip-text bg-white capitalize flex flex-col justify-center relative shrink-0 text-[32px] md:text-[48px] tracking-[-1.44px]",
    subtitle:
      "[text-shadow:rgba(0,0,0,0.92)_0px_4px_21px] bg-clip-text bg-white flex flex-col justify-center relative shrink-0 text-[16px] md:text-[20px] text-center w-full",
    gradientStyle: {
      WebkitTextFillColor: "transparent",
      backgroundImage:
        "linear-gradient(rgba(240, 241, 241, 0) 25.487%, rgb(255, 255, 255) 105.53%), linear-gradient(90deg, rgb(240, 241, 241) 0%, rgb(240, 241, 241) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
    },
  },
  button: {
    cta: "bg-white box-border content-stretch flex from-[#f0f1f100] gap-3 items-center justify-start p-[20px] md:p-[24px] relative rounded-[16px] shadow-[0px_1px_22.1px_0px_rgba(211,242,39,0.48),0px_1px_3px_0px_rgba(0,0,0,0.08)] shrink-0 to-[#ffffff] cursor-pointer hover:shadow-[0px_2px_30px_0px_rgba(211,242,39,0.6),0px_2px_5px_0px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105",
  },
};

// Use alias for backwards compatibility
const POOL_CARD_STYLES = SHARED_STYLES.poolCard;

function HeadlineSubhead() {
  return (
    <div
      className="content-stretch flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Light',_sans-serif] gap-3 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#82afd1] text-nowrap"
      data-name="headline + subhead"
    >
      <div
        className={SHARED_STYLES.header.title}
        style={SHARED_STYLES.header.gradientStyle}
      >
        <p className="leading-[1.2] text-center whitespace-pre">
          Opportunities Across Every Stage
        </p>
      </div>
      <div
        className={SHARED_STYLES.header.subtitle}
        style={SHARED_STYLES.header.gradientStyle}
      >
        <p className="leading-[1.2] whitespace-pre text-left">
          Choose from venue and genre based pools, built to
          deliver stable returns.
        </p>
      </div>
    </div>
  );
}

function Cta({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div className={SHARED_STYLES.button.cta} data-name="CTA" onClick={onNavigateToDashboard}>
      <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#333333] text-[16px] md:text-[18px] text-nowrap">
        <p className="leading-[19.2px] whitespace-pre">
          Start Earning $KYD
        </p>
      </div>
    </div>
  );
}

function HeaderCtaGroup({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-col md:flex-row items-center justify-between gap-6 px-4 md:px-0 py-6 relative shrink-0 w-full max-w-6xl"
      data-name="header + cta group"
    >
      <div
        aria-hidden="true"
        className="absolute border-[1px_0px_0px] border-solid border-white/20 inset-0 pointer-events-none"
      />
      <HeadlineSubhead />
      <Cta onNavigateToDashboard={onNavigateToDashboard} />
    </div>
  );
}

// Modular sub-components for shared styling
function PoolCardDescription({
  children,
}: {
  children: string;
}) {
  return (
    <div className="relative w-full" data-name="description">
      {/* Header with stars and "EARN FROM ACTS LIKE" */}
      <div
        className="content-stretch flex items-center justify-between w-full mb-[8px]"
        data-name="description header"
      >
        <div className="relative shrink-0 size-[18px]">
          <img
            className="block max-w-none size-full"
            src={imgStar1}
          />
        </div>
        <div className="flex flex-col font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] md:text-[14px] text-nowrap text-white/80">
          <p className="leading-[1.2] whitespace-pre text-[20px] font-semibold">
            EARN FROM ACTS LIKE
          </p>
        </div>
        <div className="relative shrink-0 size-[18px]">
          <img
            className="block max-w-none size-full"
            src={imgStar1}
          />
        </div>
      </div>

      {/* Artist names */}
      <div className="font-['ABC_Diatype_Unlicensed_Trial:Bold',_sans-serif] leading-[0] text-[12px] md:text-[14px] text-white text-justify uppercase w-full">
        <p className="leading-[1.2] w-full text-justify">
          {children}
        </p>
      </div>
    </div>
  );
}

function PoolCardImage({
  image,
  isHovered,
}: {
  image: string;
  isHovered: boolean;
}) {
  const imageStyle = isHovered
    ? POOL_CARD_STYLES.image.hover
    : POOL_CARD_STYLES.image.default;

  return (
    <div
      className={POOL_CARD_STYLES.image.base}
      style={{
        backgroundImage: `url('${image}')`,
        filter: imageStyle.filter,
        transform: imageStyle.transform,
        borderColor: imageStyle.border,
      }}
    ></div>
  );
}

function PoolCardTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={POOL_CARD_STYLES.text.title}>
      <h1 className="leading-[100%] text-[36px] font-light">
        <span>{title}</span>
        <br aria-hidden="true" />
        <span className="text-[rgba(255,255,255,0.7)]">
          {subtitle}
        </span>
      </h1>
    </div>
  );
}

function PoolCardFeature({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${className}`}>
      <div aria-hidden="true" className="pointer-events-none" />
      <div className={POOL_CARD_STYLES.text.feature}>
        {children}
      </div>
    </div>
  );
}

function PoolCardFeatures() {
  return (
    <div className="w-full border-t-1 border-b-1 border-[rgba(255,255,255,.25)]">
      <PoolCardFeature>
        <p className="leading-[1.2] py-[12px] whitespace-pre">
          Earn on your savings with USDC
        </p>
        <p className="leading-[1.2] py-[12px] border-t-1 border-[rgba(255,255,255,.25)]">
          Earn $KYD Rewards from ALL venues
          <br aria-hidden="true" />
          in our network, across genres
        </p>
      </PoolCardFeature>
    </div>
  );
}

interface PoolCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

function PoolCard({
  title,
  subtitle,
  description,
  image,
  isHovered,
  onHover,
  onLeave,
}: PoolCardProps) {
  const containerStyle = isHovered
    ? POOL_CARD_STYLES.container.hover
    : POOL_CARD_STYLES.container.default;

  return (
    <div
      className={POOL_CARD_STYLES.container.base}
      style={{
        transform: containerStyle.transform,
        boxShadow: containerStyle.boxShadow,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <PoolCardDescription>{description}</PoolCardDescription>
      <PoolCardImage image={image} isHovered={isHovered} />

      <div className="content-stretch flex flex-col gap-4 items-start justify-start leading-[0] relative shrink-0 w-full">
        <PoolCardTitle title={title} subtitle={subtitle} />
        <PoolCardFeatures />
      </div>
    </div>
  );
}

function PoolCardsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(
    null,
  );

  const poolData = [
    {
      title: "Electronic Music",
      subtitle: "Genre Venue Pool",
      description: "CALVIN HARRIS • SKRILLEX • DEADMAU5 ",
      image: imgRectangle52,
    },
    {
      title: "KYD General",
      subtitle: "All Venue Pool",
      description: "DRAKE • TAYLOR SWIFT • BAD BUNNY \n\n",
      image: imgRectangle54,
    },
    {
      title: "Rock & Roll",
      subtitle: "General Venue Pool",
      description:
        "IMAGINE DRAGONS • ARCTIC MONKEYS • FOO FIGHTERS \n\n",
      image: imgRectangle53,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 leading-[0] place-items-center justify-items-center relative shrink-0 h-[auto] w-full max-w-[1400px]">
      {poolData.map((pool, index) => (
        <PoolCard
          key={index}
          title={pool.title}
          subtitle={pool.subtitle}
          description={pool.description}
          image={pool.image}
          isHovered={hoveredCard === index}
          onHover={() => setHoveredCard(index)}
          onLeave={() => setHoveredCard(null)}
        />
      ))}
    </div>
  );
}

export function LendingPoolOptions({ onNavigateToDashboard }: { onNavigateToDashboard: () => void }) {
  return (
    <div
      className="bg-[rgba(0,0,0,0)] content-stretch flex flex-col gap-8 md:gap-12 items-center justify-start relative w-full py-12 md:py-16 px-4 md:px-8"
      data-name="lending pool options"
    >
      <HeaderCtaGroup onNavigateToDashboard={onNavigateToDashboard} />
      <PoolCardsGrid />
    </div>
  );
}

// Export shared styles for use in other components
export { SHARED_STYLES };