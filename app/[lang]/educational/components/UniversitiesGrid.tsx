'use client'
import University from "./University"


const UniversitiesGrid = () => {
  return (
    <div className="p-4 md:p-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      <University />
      <University />
      <University />
      <University />
      <University />
      <University />
      <University />
      <University />
      <University />
    </div>
  );
}

export default UniversitiesGrid