import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-72 w-72 ">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default MediumCard;
