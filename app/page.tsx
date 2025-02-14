"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import logotext from "../public/logo-w-text.svg";
import logocursor from "../public/logo-alt.svg";
import image1 from "../public/feature1.webp";
import image2 from "../public/feature2.webp";
import image3 from "../public/feature3.webp";
import AnimatedButton from "./components/AnimatedButton";
import ThreeScene from "./components/ThreeScene";
import Link from "next/link";
import "./styles/main-page-styles.css";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const underlinedItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Apply ScrollTrigger animation to each section
    sectionRefs.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 2%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    // Animate the items when they come into view
    underlinedItemsRef.current.forEach((item, index) => {
      if (item) {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
        const underline = item.querySelector(".underline-animation");

        gsap.fromTo(
          underline,
          { width: "-50%" },
          {
            width: "100%",
            duration: 1,
            ease: "bounce.inOut",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    gsap.set(".flair", { xPercent: -25, yPercent: -25, zIndex: 10000 });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-customColor2">
      {/* Custom mouse effect */}
      <div className="flair">
        <Image src={logocursor} alt="Logo" width={30} height={30} />
      </div>{" "}
      <div className="w-full">
        <ThreeScene />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current[0] = el;
        }}
        className="mb-2 mt-2 px-4 pt-20 text-center"
      >
        <Image
          ref={(el) => {
            if (el) sectionRefs.current[1] = el;
          }}
          src={logotext}
          alt="Logo"
          width={800}
          height={800}
          className="mx-auto mb-8 mt-4 max-w-full"
          style={{ opacity: 0 }}
        />
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current[2] = el;
        }}
        className="mt-6 w-full p-7 text-center"
      >
        <p className="mx-4 text-2xl text-customColor6 sm:mx-20 md:mx-40 lg:mx-60">
          TradeSense is a platform that combines social sentiment and financial
          data to help you make smarter trading decisions.
        </p>
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current[3] = el;
        }}
        className="mt-20 flex w-full flex-wrap justify-around p-6 text-center"
      >
        <div
          className="mb-8 flex w-full flex-col items-center sm:mb-0 sm:w-1/3"
          ref={(el) => {
            if (el) sectionRefs.current[4] = el;
          }}
        >
          <Image
            src={image1}
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <p className="mt-4 max-w-[400px] px-4 text-customColor6 sm:px-0">
            <strong>Hybrid Market Analysis</strong> – We analyze social
            sentiment and financial trends together and recommend actions based
            on the analysis of both social media and financial data.
          </p>
        </div>
        <div
          className="mb-8 flex w-full flex-col items-center sm:mb-0 sm:w-1/3"
          ref={(el) => {
            if (el) sectionRefs.current[5] = el;
          }}
        >
          <Image
            src={image2}
            alt="Image 2"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <p className="mt-4 max-w-[400px] px-4 text-customColor6 sm:px-0">
            <strong>Comprehensive Market Overview</strong> – Sentiment data from
            social media, technical indicators, and more. Users can get a
            general overview of the market or a specific stock.
          </p>
        </div>
        <div
          className="flex w-full flex-col items-center sm:w-1/3"
          ref={(el) => {
            if (el) sectionRefs.current[6] = el;
          }}
        >
          <Image
            src={image3}
            alt="Image 3"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
          <p className="mt-4 max-w-[400px] px-4 text-customColor6 sm:px-0">
            <strong>LLM-Driven Predictions</strong> – We combine all data
            sources and run them through an advanced LLM trained on past events
            and expert generating accurate stock recommendations.
          </p>
        </div>
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current[7] = el;
        }}
        className="mt-20 px-4 text-center"
      >
        <h2
          ref={(el) => {
            if (el) underlinedItemsRef.current[0] = el;
          }}
          className="relative inline-block font-bold text-customColor6"
          style={{ fontSize: "3rem" }}
        >
          Pricing Plans
          <div className="underline-animation"></div>
        </h2>
        <div
          className="pricing-card-container mt-6 flex justify-center gap-8"
          ref={(el) => {
            if (el) sectionRefs.current[8] = el;
          }}
        >
          <div className="pricing-card">
            <div className="front">
              <h3 className="text-xl font-semibold text-customColor6">
                Free Plan
              </h3>
              <p className="text-gray-600">
                $0.0/month - Basic access to trading insights
              </p>
            </div>
            <div className="back">
              <p className="mb-8 text-gray-600">
                Get started with limited features, perfect for beginners.
              </p>
              <Link href="/login">
                <AnimatedButton
                  paddinginput="buttonpadding2"
                  Buttoncolor="#f5efe7"
                >
                  <h2 className="text-xl font-semibold text-customColor6">
                    Get Started for Free
                  </h2>
                </AnimatedButton>
              </Link>
            </div>
          </div>
          <div className="pricing-card">
            <div className="front">
              <h3 className="text-xl font-semibold text-yellow-600">
                Pro Plan (Coming Soon)
              </h3>
              <p className="text-gray-600">
                $2.99/month - Unlock advanced features
              </p>
            </div>
            <div className="back">
              <p className="mb-8 text-gray-600">
                Includes advanced tools, real-time insights, and more.
              </p>
              <Link href="/login">
                <AnimatedButton
                  paddinginput="buttonpadding2"
                  Buttoncolor="#f5efe7"
                >
                  <h2 className="text-xl font-semibold text-customColor6">
                    Get Started
                  </h2>
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current[9] = el;
        }}
        className="mt-24 text-center"
      >
        <Link href="/login" className="custombutton">
          <AnimatedButton paddinginput="buttonpadding" Buttoncolor="">
            <h2 className="text-3xl font-semibold text-customColor2">
              Get Started for Free
            </h2>
          </AnimatedButton>
        </Link>
        <p className="twoxlpadded mt-4 text-2xl text-customColor6">
          Sign up now and take your trading to the next level.
        </p>
      </div>
      {/* Add more spacing from the last section to the footer */}
      <div className="mt-20"></div>
    </div>
  );
}
