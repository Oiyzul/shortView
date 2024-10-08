import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-7">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
