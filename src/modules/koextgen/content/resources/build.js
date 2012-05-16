/**
 * Script to build an xpi, running koext build in the current project root.
 */

var project = ko.macros.current.project;
var projectDir = ko.interpolate.interpolateString('%p');
var callback = function() {
  ko.statusBar.AddMessage('Build complete', 'projects', 5000, true);
  ko.projects.manager.saveProject(project);
};
ko.koextgen.extensionLib.command('build -i chrome.manifest -i chrome.p.manifest -d ' +
                                 '"' + projectDir + '"',
                                 callback);
