abstract class Entity<Props> {
	constructor(protected props: Props) {}

	toJSON(): Props {
		return this.props;
	}
}

type CategoryProps = {
	name: string;
	description: string;
};

class Category extends Entity<CategoryProps> {
	public getName() {
		return this.props.name;
	}

	public setName(value: string) {
		this.props.name = value;
	}
}

const category = new Category({
	name: "Bebidas",
	description: "Coca-cola 2Lts",
});

category.setName("Sobremesas");
console.log(category.getName());

console.log(category.toJSON().description);
