import { motion } from "framer-motion";

const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary teal blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl animate-blob-1"
        style={{
          background: "radial-gradient(circle, hsl(168 100% 42% / 0.6) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple accent blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-blob-2"
        style={{
          background: "radial-gradient(circle, hsl(280 100% 60% / 0.5) 0%, transparent 70%)",
          top: "40%",
          right: "5%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blue blob */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-20 blur-3xl animate-blob-3"
        style={{
          background: "radial-gradient(circle, hsl(200 100% 50% / 0.5) 0%, transparent 70%)",
          bottom: "10%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Small accent blob */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-20 blur-2xl"
        style={{
          background: "radial-gradient(circle, hsl(168 100% 42% / 0.4) 0%, transparent 70%)",
          top: "60%",
          left: "5%",
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(168 100% 42% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(168 100% 42% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
};

export default GradientBlobs;
