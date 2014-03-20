Package.describe({
  summary: "Provides the responsive hisrc library."
});

Package.on_use(function (api, where) {
  api.add_files(['hisrc.js'], ['client']);
});
