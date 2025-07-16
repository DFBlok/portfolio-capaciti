import React from "react";
import Image from "next/image";

type BadgesProps = {
  title: string;
  imageUrl: string;
  platform: string;
  date: string;
  certificateUrl?: string;
};

const badges: BadgesProps[] = [
  {
    title: "IT Specialist - JavaScript",
    imageUrl: "/badges/it-specialist-javascript.png",
    platform: "Certiport",
    date: "2024-08-16",
    certificateUrl:
      "https://www.credly.com/badges/458a2c74-20c4-4271-a7db-5ce8a4aabb02/public_url",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    imageUrl: "/badges/artificial-intelligence-fundamentals.png",
    platform: "IBM SkillsBuild",
    date: "2025-05-18",
    certificateUrl:
      "https://www.credly.com/badges/a0ca2949-fb76-4309-ace5-0d3eea6ca1af/public_url",
  },
  {
    title: "Google IT Support Professional Certificate (v2)",
    imageUrl: "/badges/google-it-support-professional-certificate-v2.png",
    platform: "Coursera",
    date: "2025-06-29",
    certificateUrl:
      "https://www.credly.com/badges/7dd1fda6-5b1b-4526-8a00-5e431d52a7cd/public_url",
  },
  {
    title: "Python for Data Science and AI",
    imageUrl: "/badges/python-for-data-science-and-ai.png",
    platform: "Coursera",
    date: "2025-07-07",
    certificateUrl:
      "https://www.credly.com/badges/55906696-4e16-492c-8f6a-8eabf2d716f4/public_url",
  },
  {
    title: "Computer Hardware Basics",
    imageUrl: "/badges/computer-hardware-basics.png",
    platform: "Cisco",
    date: "2025-07-16",
    certificateUrl:
      "https://www.credly.com/badges/810dbac4-d07a-4821-98c5-a3e51ecce954/public_url",
  },
];

export default function Badges() {
  return (
    <section className=" py-12 px-6 ">
      <div className="">
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-all"
            >
              {badge.certificateUrl ? (
                <a
                  href={badge.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={badge.imageUrl}
                    alt={badge.title}
                    width={300}
                    height={300}
                    className="rounded-xl mx-auto"
                  />
                </a>
              ) : (
                <Image
                  src={badge.imageUrl}
                  alt={badge.title}
                  width={300}
                  height={300}
                  className="rounded-xl mx-auto"
                />
              )}
              <div className="mt-4 text-center">
                <h3 className="text-xl text-black font-semibold">
                  {badge.title}
                </h3>
                <p className="text-sm text-gray-500">{badge.platform}</p>
                <p className="text-sm text-gray-400">{badge.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
