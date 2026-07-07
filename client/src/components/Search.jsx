import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-2xl space-y-2">
      <Label htmlFor="search-input" className="text-accent-blue font-semibold">
        ค้นหาที่เที่ยว
      </Label>
      <div className="relative">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="search-input"
          type="search"
          placeholder="ค้นหาสถานที่ท่องเที่ยว..."
          className="pl-9 border-border bg-white shadow-md hover:border-2 focus-visible:ring-2 focus-visible:ring-blue-500/30"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
