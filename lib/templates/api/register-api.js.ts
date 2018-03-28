/**
 * Registration of the following files for the
 * <%= name %> API into the Server namespace.
 * ```
 * './api/<%= fileName %>/methods.js'
 * './api/<%= fileName %>/api.js'
 * './api/<%= fileName %>/fixtures.js'
 * './api/<%= fileName %>/publications.js'
 * ```
 * @namespace Server.<%= name %>
 */
import '../../api/<%= fileName %>/methods.ts';
<% if ( api !== 'none' ) { %>import '../../api/<%= fileName %>/api.ts';<% } %>
import '../../api/<%= fileName %>/fixtures.ts';
import '../../api/<%= fileName %>/publications.ts';
