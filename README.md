# R2ODev.AngularNew

This is an update to the built-in `dotnet` CLI template for Angular which accomplishes the following

- Updates Angular to 6.x
- Provides the `--pwa` switch, which enables the PWA setup for Angular
    - This effectively the same as running `ng add @angular/pwa` but includes the Glyphicon assets to the cache as well as sets up the dataGroup for the SampleData controller.


## Install the Template

From your CLI command prompt, navigate to your repository folder and run the following to install the template:

`dotnet new --install|-i R2oDev.AngularNew`

*Note: To update the template, just re-run this same command.

You can then see the new template entry by running:

`dotnet new --list|-l`

Now you can initiate a new project by running:

`dotnet new coreNg --name|-n [newProject]`

This will create a new project, based on this template, in a folder based on the `--name` parameter. Additionally, with this template, you can omit the `--name` parameter and the project will be created in the folder of command line path and the project name will mirror the folder name.

## Uninstall Template

To uninstall the template, run the following:

`dotnet new --uninstall|-u R2oDev.AngularNew`

## Upcoming features

- Logging switch (None, NLog, Serilog)
- Package Manager switch (NPM, Yarn)
- EntityFrameworkCore (EFCore): DB Init, Migration, Seed
- IdentityFrameworkCore (IdentityCore): Native or UI Library scaffolding
- Swagger switch

