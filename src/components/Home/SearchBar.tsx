import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "../ui/input";


const SearchBar = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/plan-trip", { state: { destination: searchValue } });
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="bg-card hover:bg-card-hover transition-smooth rounded-2xl shadow-md p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
            <Search className="w-5 h-5 text-primary" />
          </div>
          <Input
            type="text"
            placeholder="Où allez-vous ?"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
