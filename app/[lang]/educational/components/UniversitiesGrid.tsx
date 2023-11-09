'use client'
import { useParams } from "next/navigation";
import UniversityItem from "./UniversityItem";
import { getUniversities } from "@/actions/educational";
import { useEffect, useState } from "react";
import { University } from "@/types";

interface UniversitiesGridProps {
  universities: University[];
}

const UniversitiesGrid = ({universities} : UniversitiesGridProps) => {

  

 

  return (
    <div className="py-4 md:py-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {universities &&
        universities.map((university) => (
          <UniversityItem key={university.id} {...university} />
        ))}
    </div>
  );
}

export default UniversitiesGrid