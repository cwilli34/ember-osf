import DS from 'ember-data';

import OsfModel from './osf-model';

/**
 * @module ember-osf
 * @submodule models
 */

/**
 * Model for OSF APIv2 metaschemas.
 * This model describes metaschemas and can be directly queried.
 * For information on how to retrieve metaschemas see:
 * * https://api.osf.io/v2/docs/#!/v2/Meta_Schemas_List_GET
 * * https://api.osf.io/v2/docs/#!/v2/Meta_Schema_Detail_GET
 * @class Metaschema
 */

export default OsfModel.extend({
    name: DS.attr('string'),
    schemaVersion: DS.attr('number'),
    schema: DS.attr()
});
