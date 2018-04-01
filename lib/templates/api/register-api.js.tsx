/**
 * Registration of the following files for the
 * <%= name %> API into the Server namespace.
 * ```
 * './api<%= optsDir %><%= fileName %>/methods.js'
 * './api<%= optsDir %><%= fileName %>/api.js'
 * './api<%= optsDir %><%= fileName %>/fixtures.js'
 * './api<%= optsDir %><%= fileName %>/publications.js'
 * ```
 * @namespace Server.<%= name %>
 */
import '../../api<%= optsDir %><%= fileName %>/rpc-methods.tsx';
import '../../api<%= optsDir %><%= fileName %>/fixtures.tsx';
import '../../api<%= optsDir %><%= fileName %>/publications.tsx';
<% if( api !== 'none' ) { %>import '../../api<%= optsDir %><%= fileName %>/rest-api.tsx';<% } %>