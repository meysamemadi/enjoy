import Title from "@/app/[lang]/components/title"
import { DocumentItem } from "./document-item";

interface Document {
  id: number;
  name: string;
  image: string;
}

export const MedicalDocument = ({ document }: { document : Document[] }) => {


  

  return (
    <div className="mt-[30px] md:mt-[60px] lg:mt-[100px]">
      <Title title="medical documents" />
      <div className=" container mt-4 md:mt-[40px] grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {document.length && document.map((item: any) => (
          <DocumentItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
