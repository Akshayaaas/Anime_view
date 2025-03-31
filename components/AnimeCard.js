"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function AnimeCard({ anime }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer"
    >
      <Link href={`/anime/${anime.id}`}>
        <div className="max-w-sm rounded relative w-full overflow-hidden">
          <motion.div
            className="relative w-full h-[42vh]" // Increased height from 37vh to 42vh
            whileHover={{
              boxShadow: "0px 0px 15px rgba(0, 0, 255, 0.5)"
            }}
          >
            <Image
              src={anime.image.original}
              alt={anime.name}
              fill
              className="rounded-xl object-cover"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl flex items-end"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-white p-4 font-medium"
              >
                Click to view details
              </motion.p>
            </motion.div>
          </motion.div>

          <div className="py-4 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-1">
              <motion.h2
                className="font-bold text-white text-xl line-clamp-1 w-full"
                whileHover={{ color: "#4F46E5" }}
              >
                {anime.name.replace(/_/g, ' ')} {/* Added space replacement for better display */}
              </motion.h2>
              <motion.div
                className="py-1 px-2 bg-[#161921] rounded-sm"
                whileHover={{ backgroundColor: "#2D3748" }}
              >
                <p className="text-white text-sm font-bold capitalize">
                  {anime.kind}
                </p>
              </motion.div>
            </div>

            <div className="flex gap-4 items-center">
              <motion.div
                className="flex flex-row gap-2 items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="./episodes.svg"
                  alt="episodes"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-base text-white font-bold">
                  {anime.episodes || anime.episodes_aired}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-row gap-2 items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="./star.svg"
                  alt="star"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <motion.p
                  className="text-base font-bold text-[#FFAD49]"
                  whileHover={{ scale: 1.1 }}
                >
                  {anime.score}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default AnimeCard;
