import CustomCard from "../../components/card/CustomCard";
import HookForm from "../../components/form/HookForm";
import SearchForm from "../../components/form/SearchForm";

export default function CloudResourceOrder() {
    return (
        <div className="cloudResourceOrder">
            <CustomCard customClass='searchForm'>
                <SearchForm />
            </CustomCard>
            <CustomCard>
                <HookForm />
            </CustomCard>
        </div>
    )
}