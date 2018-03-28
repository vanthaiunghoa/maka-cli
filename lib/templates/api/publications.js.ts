import { Meteor } from 'meteor/meteor';
import { <%= name %> } from '../<%= fileName %>.ts';

/**
 * Collection publications to the client.  Publications must
 * return a cursor object.
 *
 * *Disabled by default. Uncomment return for each publication to enable.*
 *
 * Example:
 * ```
 *   Meteor.publish('<%= fileName %>.public', function <%= camelCase %>Public() {
 *       let cursor = <%= name %>.find({
 *           userId: { $exists: false },
 *       }, {
 *           fields: <%= name %>.publicFields
 *       });
 *       return cursor;
 *   });
 * ```
 * @memberof Server.<%= name %>
 * @member Publications
 */
Meteor.publish('<%= fileName %>.public', function <%= camelCase %>Public() {
      return <%= name %>.find({
          userId: { $exists: false },
      }, {
          fields: <%= name %>.publicFields
      });
});

Meteor.publish('<%= fileName %>.private', function <%= camelCase %>Private() {
        if (!this.userId) {
            return this.ready();
        }

        return <%= name %>.find({
            userId: this.userId,
        }, {
            fields: <%= name %>.privateFields,
        });
});
