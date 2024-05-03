import ImageColorDetecor from "@/components/ImageColorDetecor";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-4 px-2">
      <ImageColorDetecor imageUrl="1.jpg" />
      <ImageColorDetecor imageUrl="2.jpg" />
      <ImageColorDetecor imageUrl="3.jpg" />
      <ImageColorDetecor imageUrl="4.jpg" />
    </div>
  );
}
