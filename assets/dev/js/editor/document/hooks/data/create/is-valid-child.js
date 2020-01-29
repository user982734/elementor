import Dependency from 'elementor-api/modules/hooks/data/dependency';
import DocumentHelpers from 'elementor-document/helper';

export class IsValidChild extends Dependency {
	getCommand() {
		return 'document/elements/create';
	}

	getId() {
		return 'is-valid-child';
	}

	apply( args ) {
		const { containers = [ args.container ], model = {} } = args,
			modelToCreate = new Backbone.Model( model );

		return containers.some( ( /* Container */ container ) => (
			DocumentHelpers.isValidChild( modelToCreate, container.model )
		) );
	}
}

export default IsValidChild;
