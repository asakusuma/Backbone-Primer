templates.person = {
	"base": ' \
		<%= content %> \
	',
	"form": {
		"textbox": ' \
			<td><input type="text" name="<%= name %>" placeholder="<%= label %>" value="<% if(typeof value != "undefined"){ %><%= value %><% } %>"></td> \
		',
		"select": ' \
			<td><select name="<%= name %>"> \
				<% for(var i = 0; i < options.length; i++) { %> \
					<option value="<%= options[i] %>"><%= options[i] %></option> \
				<% } %> \
			</select></td> \
		',
		"tuple": ' \
			<td><input type="text" value="<% if(typeof value != "undefined"){ %><%= value %><% } %>" disabled /></td> \
		',
	}
};