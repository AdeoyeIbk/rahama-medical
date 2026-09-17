import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  UserPlus,
  FirstAid,
  Lock,
  Key,
  Pulse,
  Eye,
} from "@phosphor-icons/react";

export default function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-slate-900"></div>
);

const items = [
  {
    title: "Register Identity",
    description: "The patient receives their verified Rahama Health ID through their participating healthcare facility.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <div className="flex items-center justify-between w-full">
        <div className="p-2 rounded-lg bg-blue-500/10 text-[#0837ad] dark:text-blue-400">
          <UserPlus className="h-5 w-5 text-[#0837ad] dark:text-blue-400" />
        </div>
        <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">01</span>
      </div>
    ),
  },
  {
    title: "Receive Clinical Care",
    description: "The hospital records consultation, labs, and diagnoses using its existing EMR system.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <div className="flex items-center justify-between w-full">
        <div className="p-2 rounded-lg bg-blue-500/10 text-[#000066] dark:text-blue-400">
          <FirstAid className="h-5 w-5" />
        </div>
        <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">02</span>
      </div>
    ),
  },
  {
    title: "Secure Linkage",
    description: "Medical summaries are encrypted and securely indexed under the patient's lifelong Rahama Health ID.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <div className="flex items-center justify-between w-full">
        <div className="p-2 rounded-lg bg-blue-500/10 text-[#0837ad] dark:text-blue-400">
          <Lock className="h-5 w-5" />
        </div>
        <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">03</span>
      </div>
    ),
  },
  {
    title: "Grant Permission",
    description: "When visiting another facility, the patient approves temporary record access via portal or SMS token.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <div className="flex items-center justify-between w-full">
        <div className="p-2 rounded-lg bg-blue-500/10 text-[#000066] dark:text-blue-400">
          <Key className="h-5 w-5" />
        </div>
        <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">04</span>
      </div>
    ),
  },
  {
    title: "Informed Care",
    description: "Attending doctors review complete medical history to make faster, safer, and higher-quality decisions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <div className="flex items-center justify-between w-full">
        <div className="p-2 rounded-lg bg-blue-500/10 text-[#0837ad] dark:text-blue-400">
          <Pulse className="h-5 w-5" />
        </div>
        <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">05</span>
      </div>
    ),
  },
  {
    title: "Audit Visibility",
    description: "Every access event is logged to the patient's immutable audit trail, providing 100% transparency.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <div className="flex items-center justify-between w-full">
        <div className="p-2 rounded-lg bg-blue-500/10 text-[#000066] dark:text-blue-400">
          <Eye className="h-5 w-5" />
        </div>
        <span className="text-2xl font-black font-heading text-slate-300 dark:text-slate-700">06</span>
      </div>
    ),
  },
];
