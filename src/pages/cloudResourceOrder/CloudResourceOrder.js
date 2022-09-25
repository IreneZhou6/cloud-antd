import CustomCard from "../../components/card/CustomCard";
import HookForm from "../../components/form/HookForm";
import SearchForm from "../../components/form/SearchForm";

export default function CloudResourceOrder() {
    const project = [{
        label: '项目名称',
        name: 'projectName',
    }]
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