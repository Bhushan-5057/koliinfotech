"use client";
import React, { useEffect } from "react";
import "./AIAgentsSection.css";
import {
  Zap,
  Target,
  Navigation,
  Activity,
  BrainCircuit,
  Settings,
  Users,
  Bot,
  UserCheck,
  ShieldCheck,
  Puzzle,
  Maximize,
  Heart,
  RotateCcw
} from "lucide-react";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";
const DARK = "#1e293b";

const agentTypes = [
  {
    icon: Zap,
    title: "Simple Reflex Agents",
    description: "Operate on condition-action rules for real-time, rule-based applications like spam filters and basic alert systems.",
    tint: "#eef6ff", // Soft Blue
  },
  {
    icon: Activity,
    title: "Model-Based Reflex Agents",
    description: "Maintaining internal models for context-aware decisions by monitoring past data and forecasting environmental results in detail.",
    tint: "#ffffff", // Pure White
  },
  {
    icon: Target,
    title: "Goal-Based Agents",
    description: "Perfect for systems that prioritize preset goals, such as process optimization, strategic planning, and autonomous navigation.",
    tint: "#eef6ff", // Soft Blue
  },
  {
    icon: Settings,
    title: "Utility-Based Agents",
    description: "Evaluates multiple actions based on utility values, allowing for optimal decision-making in complex high-stakes environments.",
    tint: "#ffffff", // Pure White
  },
  {
    icon: BrainCircuit,
    title: "Learning Agents",
    description: "Leverages machine learning to adjust and develop based on prior experiences, perfect for predictive analytics and engines.",
    tint: "#ffffff", // Pure White (Checkerboard mirrored)
  },
  {
    icon: Settings,
    title: "Autonomous Agents",
    description: "Capable of operating independently with minimal human input, from smart industrial robots to intelligent home appliances.",
    tint: "#eef6ff", // Soft Blue
  },
  {
    icon: Users,
    title: "Multi-Agent Systems",
    description: "Built for cooperative settings where multiple agents collaborate and interact to accomplish sophisticated common digital objectives.",
    tint: "#ffffff", // Pure White
  },
  {
    icon: Bot,
    title: "Virtual Assistants",
    description: "Intelligent chatbots and voice assistants designed to provide context-aware, human-like interactions for everyday professional service.",
    tint: "#eef6ff", // Soft Blue
  },
];

const capabilities = [
  { icon: UserCheck, title: "Personalization & Adaptive Learning" },
  { icon: ShieldCheck, title: "Security & Data Privacy" },
  { icon: Puzzle, title: "Integration with APIs & Third-Party Services" },
  { icon: Maximize, title: "Scalability & Multi-agent Collaboration" },
  { icon: Heart, title: "Emotional Intelligence & Sentiment Analysis" },
  { icon: RotateCcw, title: "Continuous Learning & Self-Improvement" }
];

const AIAgentsSection = () => {
return (
    <section className="ai-agents-section">
      <div className="container">
        {/* Intro Header */}
        <div className="text-center mb-5 pb-3">
          <span className="agents-badge">AI Platform Development</span>
          <h2 className="agents-heading">
            Examining Different Types of <span className="text-accent">AI Agents</span> in our Platform
          </h2>
          <div className="agents-divider mx-auto my-4" />
          <p className="agents-subtitle mx-auto">
            As a leading AI agent development company, <strong>KOLI Infotech</strong> specializes in building intelligent, purpose-driven AI agents that power innovation, automation, and efficiency. From basic reflex systems to self-learning agents, our solutions are crafted to provide customized, scalable growth.
          </p>
        </div>

        {/* Agent Types Grid */}
        <div className="row g-4 mb-5">
          {agentTypes.map((agent, idx) => (
            <div className="col-12 col-sm-6 col-lg-3" key={idx}>
              <div className="agent-type-card" style={{ backgroundColor: agent.tint }}>
                <div className="agent-type-icon">
                  <agent.icon size={26} color={BRAND_BLUE} strokeWidth={2} />
                </div>
                <h4 className="agent-type-title">{agent.title}</h4>
                <p className="agent-type-desc">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Capabilities - Tactical Blueprint Design */}
        <div className="capabilities-wrap mt-5 pt-5">
          <div className="text-center mb-5">
            <h3 className="sub-heading">
              Technical <span className="text-accent">Capabilities</span> & Intelligence Modules
            </h3>
            <p className="cap-subtitle mx-auto">High-precision architecture designed for enterprise-grade AI deployment.</p>
          </div>
          <div className="cap-grid">
            {capabilities.map((cap, idx) => (
              <div className="cap-grid-item" key={idx}>
                <div className="cap-tactical-box">
                  <div className="tactical-corner top-left"></div>
                  <div className="tactical-corner top-right"></div>
                  <div className="tactical-corner bottom-left"></div>
                  <div className="tactical-corner bottom-right"></div>
                  <div className="cap-icon-box">
                    <cap.icon size={22} color={BRAND_BLUE} />
                  </div>
                  <h5 className="cap-title">{cap.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AIAgentsSection;
