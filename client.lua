local function addKey(id, data)
  if type(id) ~= "string" then
    error("bad argument #1 to 'addKey' (string expected, got " .. type(id) .. ")", 2)
  end

  if type(data) ~= 'table' or not data.key or not data.text then
    error("bad argument #2 to 'addKey' (must have table with 'key' and 'text' fields)", 2)
  end

  SendNUIMessage({
    action = "add",
    id = id,
    data = data
  })
end

local function removeKey(id)
  if type(id) ~= "string" then
    error("bad argument #1 to 'removeKey' (string expected, got " .. type(id) .. ")", 2)
  end

  SendNUIMessage({
    action = "remove",
    id = id
  })
end

local function editKey(key, data)
  if type(key) ~= "string" then
    error("bad argument #1 to 'editKey' (string expected, got " .. type(key) .. ")", 2)
  end

  if type(data) ~= 'table' or not data.key or not data.text then
    error("bad argument #2 to 'editKey' (must have table with 'key' and 'text' fields)", 2)
  end

  SendNUIMessage({
    action = "edit",
    id = key,
    data = data
  })
end

exports('AddButton', addKey)
exports('RemoveButton', removeKey)
exports('EditButton', editKey)