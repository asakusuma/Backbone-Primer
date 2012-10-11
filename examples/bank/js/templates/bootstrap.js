var templates = {
	"form": {
		"textbox": ' \
			<div class="control-group"> \
   				<label class="control-label"><%= label %></label> \
    			<div class="controls"> \
      				<input type="text" name="<%= name %>" placeholder="<%= label %>"> \
    			</div> \
  			</div> \
		',
		"select": ' \
			<div class="control-group"> \
   				<label class="control-label"><%= label %></label> \
    			<div class="controls"> \
      				<select name="<%= name %>"> \
      					<% for(var i = 0; i < options.length; i++) { %> \
      						<option value="<%= options[i] %>"><%= options[i] %></option> \
      					<% } %> \
      				</select> \
    			</div> \
  			</div> \
		',
		"tuple": ' \
			<div class="control-group"> \
   				<label class="control-label"><%= label %></label> \
    			<div class="controls"> \
      				<input type="text" value="<% if(typeof value != "undefined"){ %> \
      					<%= value %> \
      					<% } %>" disabled /> \
    			</div> \
  			</div> \
		',
	}
};