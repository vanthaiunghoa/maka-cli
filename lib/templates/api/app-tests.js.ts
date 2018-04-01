import { Meteor } from 'meteor/meteor';
import <%= name %> from './<%= fileName %>-collection.ts';

if (Meteor.isServer) {<% if (test === 'jasmine') { %>
  describe('<%= name %>', () => {
      it('has been defined', () => {
          let isDefined = false;
          if(<%= name %>) {
            isDefined = true;
          }

          expect(isDefined).toBe(true);
      });
  });<% } %>
}
