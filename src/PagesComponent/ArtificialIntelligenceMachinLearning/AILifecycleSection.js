"use client";
import React, { useEffect } from "react";
import "./AILifecycleSection.css";
import {
    DatabaseZap,
    SlidersHorizontal,
    BrainCircuit,
    Lightbulb,
    RefreshCcw,
} from "lucide-react";

const BRAND_BLUE = "#3f689f";
const ACCENT = "#5b9bd5";

const steps = [
    {
        icon: DatabaseZap,
        title: "Data Collection",
        description: "Aggregate structured and unstructured data from diverse enterprise sources.",
        step: "01",
    },
    {
        icon: SlidersHorizontal,
        title: "Data Processing",
        description: "Cleanse, transform, and enrich raw data for reliable model training inputs.",
        step: "02",
    },
    {
        icon: BrainCircuit,
        title: "AI Model Training",
        description: "Train and validate machine learning models using domain-specific datasets.",
        step: "03",
    },
    {
        icon: Lightbulb,
        title: "Intelligent Decision Making",
        description: "Deploy AI agents that act on insights and drive real-time business outcomes.",
        step: "04",
    },
    {
        icon: RefreshCcw,
        title: "Continuous Optimization",
        description: "Monitor model performance and retrain automatically for sustained accuracy.",
        step: "05",
    },
];

const AILifecycleSection = () => {
return (
        <section className="ai-lifecycle-section">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <span className="lifecycle-badge">AI Lifecycle</span>
                    <h2 className="lifecycle-heading">How Our AI Solutions Work</h2>
                    <p className="lifecycle-subtitle">
                        A proven end-to-end process that transforms raw data into intelligent,
                        continuously improving enterprise systems.
                    </p>
                </div>

                {/* Step Process */}
                <div className="lifecycle-steps-wrapper">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isLast = idx === steps.length - 1;
                        return (
                            <div
                                key={idx}
                                className="lifecycle-step"
                            >
                                {/* Connector line (not on last item) */}
                                {!isLast && <div className="lifecycle-connector" aria-hidden="true" />}

                                {/* Icon circle */}
                                <div className="lifecycle-icon-wrap">
                                    <Icon size={28} color={BRAND_BLUE} strokeWidth={1.8} />
                                    <span className="lifecycle-step-num">{step.step}</span>
                                </div>

                                {/* Text */}
                                <div className="lifecycle-text">
                                    <h3 className="lifecycle-title">{step.title}</h3>
                                    <p className="lifecycle-desc">{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default AILifecycleSection;
