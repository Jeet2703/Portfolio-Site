import React from "react";

type SectionHeaderProps = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-4xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
