import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Settings, Sprout, Sparkles, Share2, Zap } from "lucide-react";
import cysicLogo from "@assets/generated_images/Cysic_blockchain_technology_logo_c77354e3.png";

const questionPool = [
  { q: "What does Cysic focus on?", a: ["Blockchain storage", "Zero-knowledge hardware acceleration", "NFT art", "SocialFi"], correct: 1 },
  { q: "What is ComputeFi?", a: ["Financial computation model", "Network of provers & verifiers", "Decentralized AI storage", "Mining protocol"], correct: 1 },
  { q: "Which consensus does Cysic introduce?", a: ["Proof of Work", "Proof of Stake", "Proof of Compute", "Proof of Burn"], correct: 2 },
  { q: "Which device family powers Cysic provers?", a: ["Dogebox", "ComputePod", "ZKBoard", "NodeFi"], correct: 0 },
  { q: "Cysic speeds up ZK proofs by?", a: ["More validators", "Hardware parallelization", "Bigger blocks", "Fewer transactions"], correct: 1 },
  { q: "What problem does Cysic primarily solve for ZK tech?", a: ["Proof generation speed", "Proof verification error", "Wallet UX", "Smart contract bugs"], correct: 0 },
  { q: "Cysic's network allows provers to?", a: ["Mine coins", "Share computation workloads", "Store NFTs", "Build dApps"], correct: 1 },
  { q: "Proof of Compute rewards are based on?", a: ["Random selection", "Hash power", "Verified computation output", "Staked amount"], correct: 2 },
  { q: "Cysic's Dogebox 1 is a?", a: ["Validator node", "Hardware prover device", "Storage unit", "Network router"], correct: 1 },
  { q: "ComputeFi turns computation into?", a: ["Consensus & value", "AI models", "File storage", "Random seeds"], correct: 0 },
  { q: "ZK stands for?", a: ["Zero Knowledge", "Zone Keeper", "Zeta Kernel", "Zero Key"], correct: 0 },
  { q: "What ensures decentralization in Cysic hardware?", a: ["Open interfaces & distributed nodes", "Closed ASICs", "Private hosting", "Central servers"], correct: 0 },
  { q: "Cysic's architecture stack includes?", a: ["Hardware, Network, Proofs", "Users, Apps, Nodes", "Data, Chain, Mining", "Nodes, Wallets, Coins"], correct: 0 },
  { q: "The Cysic network rewards provers who?", a: ["Contribute verified computation", "Stake tokens", "Mine BTC", "Hold NFTs"], correct: 0 },
  { q: "Zero-knowledge proofs allow you to?", a: ["Prove without revealing data", "Mine new coins", "Verify transactions manually", "Store NFTs privately"], correct: 0 },
  { q: "What's Cysic's broader vision?", a: ["Building the ComputeFi economy", "Creating NFTs", "Launching DEXes", "Hosting Layer 1s"], correct: 0 },
  { q: "Hardware builds the base. Network connects it. Proofs...?", a: ["Verify it", "Store it", "Compute it", "Ignore it"], correct: 0 },
  { q: "What is Dogebox designed to do?", a: ["Accelerate proof computation", "Mine BTC", "Store ZK data", "Replace GPUs"], correct: 0 },
  { q: "Which layer is the ComputeFi economy enabling?", a: ["Layer 0 of computation", "Layer 2 scaling", "Application layer", "Storage layer"], correct: 0 },
  { q: "How does Cysic promote decentralization?", a: ["Distributed provers + open hardware", "Private staking", "Closed SDK", "Single vendor GPUs"], correct: 0 },
];

export default function QuizPage() {
  const [questions, setQuestions] = useState<typeof questionPool>([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const shuffled = [...questionPool].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
  }, []);

  const handleAnswer = (i: number) => {
    setSelectedAnswer(i);
    
    setTimeout(() => {
      if (i === questions[step].correct) setScore(score + 1);
      if (step + 1 === questions.length) setFinished(true);
      else setStep(step + 1);
      setSelectedAnswer(null);
    }, 300);
  };

  const getTitle = () => {
    if (score === 5) return "Cysic OG";
    if (score >= 4) return "Cysor Elite";
    if (score >= 2) return "Aspiring Cysor";
    return "ComputeFi Explorer";
  };

  const getTitleIcon = () => {
    if (score === 5) return Brain;
    if (score >= 4) return Settings;
    if (score >= 2) return Sprout;
    return Sparkles;
  };

  const generateBadge = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const width = 600;
    const height = 400;
    canvas.width = width;
    canvas.height = height;

    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#020617");
    gradient.addColorStop(1, "#06b6d4");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Glowing ring
    ctx.beginPath();
    ctx.arc(300, 200, 150, 0, 2 * Math.PI);
    ctx.shadowColor = "#22d3ee";
    ctx.shadowBlur = 40;
    ctx.strokeStyle = "#0891b2";
    ctx.lineWidth = 6;
    ctx.stroke();

    // Logo watermark
    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.src = cysicLogo;
    await new Promise((res) => {
      logo.onload = res;
      logo.onerror = res;
    });
    ctx.globalAlpha = 0.15;
    ctx.drawImage(logo, 150, 100, 300, 200);
    ctx.globalAlpha = 1;

    // Reset shadow
    ctx.shadowBlur = 0;

    // Text
    ctx.fillStyle = "#fff";
    ctx.font = "bold 26px Orbitron, Arial";
    ctx.textAlign = "center";
    ctx.fillText("CYSIC KNOWLEDGE CHALLENGE", 300, 60);

    ctx.font = "22px Inter, Arial";
    ctx.fillText(getTitle(), 300, 150);

    ctx.font = "bold 64px Inter, Arial";
    ctx.fillText(`${score}/5`, 300, 260);

    ctx.font = "18px Inter, Arial";
    ctx.fillStyle = "#a5f3fc";
    ctx.fillText("Powered by @cysic_xyz | #ComputeFi", 300, 360);
  };

  const shareOnX = async () => {
    await generateBadge();
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const img = canvas.toDataURL("image/png");

    // Auto-download badge
    const link = document.createElement("a");
    link.download = "Cysic_Badge.png";
    link.href = img;
    link.click();

    // Pre-filled tweet
    const text = `I scored ${score}/5 in the Cysic Knowledge Challenge! ${getTitle()}\n\n@cysic_xyz #ComputeFi #ProofOfCompute`;
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-100 text-lg" data-testid="text-loading">Loading quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-sky-600/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-md text-center border border-cyan-600/30 relative z-10">
        {!finished ? (
          <>
            <div className="flex items-center justify-center gap-2 mb-4">
              <h1 className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" data-testid="text-title">
                Cysic Knowledge Challenge
              </h1>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
            </div>
            <p className="text-muted-foreground mb-2 text-sm" data-testid="text-progress">
              Question {step + 1} of {questions.length}
            </p>
            <p className="text-base sm:text-lg font-semibold mb-6 min-h-[3rem] flex items-center justify-center" data-testid="text-question">
              {questions[step].q}
            </p>
            <div className="grid gap-3">
              {questions[step].a.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedAnswer !== null}
                  className={`
                    bg-slate-800 py-3 px-4 rounded-lg border border-cyan-600 
                    transition-all duration-200 text-left
                    ${selectedAnswer === null ? 'hover-elevate active-elevate-2 cursor-pointer' : 'opacity-50 cursor-not-allowed'}
                    ${selectedAnswer === i ? 'bg-cyan-500/40 border-cyan-400' : ''}
                  `}
                  data-testid={`button-answer-${i}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4 font-heading" data-testid="text-result-title">
              Your Result
            </h2>
            <div className="mb-6">
              <div className="flex items-center justify-center mb-3">
                {(() => {
                  const IconComponent = getTitleIcon();
                  return <IconComponent className="w-12 h-12 text-cyan-400" />;
                })()}
              </div>
              <p className="text-xl sm:text-2xl mb-2 font-semibold" data-testid="text-achievement-title">
                {getTitle()}
              </p>
              <p className="text-muted-foreground">
                You scored <span className="text-cyan-400 font-semibold font-mono text-xl" data-testid="text-score">{score}/5</span>
              </p>
            </div>
            <Button
              onClick={shareOnX}
              size="lg"
              className="w-full gap-2"
              data-testid="button-share"
            >
              <Share2 className="w-4 h-4" />
              Generate & Share Badge
            </Button>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
          </>
        )}
      </div>
    </div>
  );
}
