define([], function(){
  let messages = Object.create(null);
  function load(lang){
    require([`../locales/${lang}`], function(langs){
      messages = langs;
    });
  }
  function $t(key){
    return messages[key] || '';
  }
  return {load, $t}
});