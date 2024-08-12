# Monorepo Template

A monorepo setup using Lerna and Yarn workspaces.

## Getting Started

Initialize your Lerna monorepo:

```bash
lerna init
```

Create a new package within the monorepo
```
lerna create [PACKAGE_NAME]
```


## Managing Dependencies for Specific Packages
### Installing an External Library for a Specific Package
To install an external library for a specific package within the monorepo, use the following command

```
yarn workspace [PACKAGE_NAME] add ant-design-vue@4.x
```

### Removing an External Library from a Specific Package
To remove an external library from a specific package within the monorepo, use the following command

```
yarn workspace [PACKAGE_NAME] remove ant-design-vue@4.x
```
