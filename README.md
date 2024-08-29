# MATH3RAPHE-WEB

[Watch the video on YouTube](https://www.youtube.com/watch?v=9m4kMCiYZgM)

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
    1. [Open Application](#open-application)
    2. [Change Language](#change-language)
    3. [Change Theme](#change-theme)
    4. [Select Graph Type](#select-graph-type)
    5. [Add Nodes](#add-nodes)
    6. [Change Node ID](#change-node-id)
    7. [Add Edges](#add-edges)
    8. [Remove Nodes](#remove-nodes)
        1. [Remove Nodes by Click](#remove-nodes-by-click)
        2. [Remove Nodes by ID](#remove-nodes-by-id)
    9. [Remove Edges](#remove-edges)
        1. [Remove Edges by Click](#remove-edges-by-click)
        2. [Remove Edge by ID](#remove-edge-by-id)
    10. [Remove Edges and Nodes by Click](#remove-edges-and-nodes-by-click)
    11. [Initialize Graph](#initialize-graph)
    12. [Create Graph Using Adjacency List](#create-graph-using-adjacency-list)
    13. [Create Graph from List of Edges](#create-graph-from-list-of-edges)
    14. [Graph Informations](#graph-informations)
    15. [Save & Upload Your Work](#save--upload-your-work)
4. [License](#license)


## Introduction

MATH3RAPHE is a Progressive Web Application (PWA) built with Angular, bringing the fascinating world of graph theory right to your web browser. With this powerful tool, you can explore and visualize real-time graphs, run graph theory algorithms, and create stunning visual representations of mathematical concepts.

I would like to express my heartfelt gratitude to my invaluable mentor, **[Dr. abderrahim ghadi](https://www.linkedin.com/in/abderrahim-ghadi-03657025/)**, for his guidance and support throughout this project. His insights and advice have been instrumental in bringing this vision to life.

## Installation
### From the browser :
Open: *https://math3raphe.web.app/*

![From the browser](docs/readme/images/first-image-browser.png)

![From the browser](docs/readme/images/first-image-browser-click.png)

![From the browser](docs/readme/images/first-image-browser-click-install.png)

![From the browser](docs/readme/images/first-image-browser-click-installed.png)

![From the browser](docs/readme/images/first-image-browser-click-installed-open.png)

### From Github : 
#### Clone the repository:
```bash
$ git clone https://github.com/LaamiriOuail/MATH3RAPHE-WEB.git
```
#### Navigate to the application folder:
```bash
$ cd MATH3RAPHE-WEB
```
#### Install dependencies:
```bash
$ npm install
```
#### Run the application:
 
```bash
$ ng serve --port 4201
```
Open : *http://localhost:4201*

<!-- ### From DockerHub :
#### Pull the Docker image:
```bash
$ docker pull ouail02/math3raphe-web
```
#### Run the application:
```bash
$ docker run --name=math3raphe-web-container -p 5000:80 ouail02/math3raphe-web
```
Open : *http://localhost:5000* -->

## Usage

### **1** Open Application <a id="open-application"></a> : *https://math3raphe.web.app*
---
![From the browser](docs/readme/images/first-image-browser.png)

### **2** Change language <a id="change-language"></a> : 
---
![From the browser](docs/readme/images/usage-change-language.png)

### **3** Change theme <a id="change-theme"></a>: 
---
![From the browser](docs/readme/images/usage-change-theme.png)

### **4** Select graph type <a id="select-graph-type"></a>: 
---
![From the browser](docs/readme/images/usage-select-graphe-type.png)

### **5** Add nodes <a id="add-nodes"></a>: 
---
![From the browser](docs/readme/images/usage-add-nodes.png)
#### `select the nodes enumeration type`
![From the browser](docs/readme/images/usage-choose-the-namming-type-of-nodes.png)

#### `Click on the workspace to add new node`
![From the browser](docs/readme/images/usage-click-on-the-workspace-to-add-new-node.png)


### **6** Change node id <a id="change-node-id"></a>: 
---
![From the browser](docs/readme/images/usage-change-node-id.png)

![From the browser](docs/readme/images/usage-change-node-id-select.png)

![From the browser](docs/readme/images/usage-change-node-id-enter.png)

![From the browser](docs/readme/images/usage-change-node-id-message.png)

### **7** Add edges <a id="add-edges"></a>: 
---
![From the browser](docs/readme/images/usage-add-edges.png.jpg)
#### `select the first node of the edge (source in the case of directed graphe)`
![From the browser](docs/readme/images/usage-add-edges-first-node.png)

#### `select the second node of the edge (target in the case of directed graphe)` 
![From the browser](docs/readme/images/usage-add-edges-seconde-node.png)

#### `enter the weight of the edge in case of weighted graphe `
![From the browser](docs/readme/images/usage-add-edges-weight.png)

#### `Edge added successfully`
![From the browser](docs/readme/images/usage-add-edges-successfully.png)


### **8** Remove nodes <a id="remove-nodes"></a>: 
---
#### **8.1** Remove nodes by click <a id="remove-nodes-by-click"></a>: 
![From the browser](docs/readme/images/usage-remove-nodes-by-click.png)

##### `Click on nodes that you need to remove`
![From the browser](docs/readme/images/usage-remove-nodes-by-click-message.png)

![From the browser](docs/readme/images/usage-removed-nodes-by-click-message.png)

#### **8.2** Remove nodes by id <a id="remove-nodes-by-id"></a> :
![From the browser](docs/readme/images/usage-remove-nodes-by-id.png)

##### `Enter the id of the node`

![From the browser](docs/readme/images/usage-remove-nodes-by-id-enter.png)

![From the browser](docs/readme/images/usage-removed-nodes-by-id-message.png)



### **9** Remove edges <a id="remove-edges"></a>: 
---
#### **9.1** Remove edges by click <a id="remove-edges-by-click"></a>: 
![From the browser](docs/readme/images/usage-remove-edges-by-click.png)

##### `Click on edge that you need to remove`
![From the browser](docs/readme/images/usage-remove-edges-by-click-message.png)

![From the browser](docs/readme/images/usage-removed-edges-by-click-message.png)

#### **9.2** Remove edge by id <a id="remove-edge-by-id"></a> :
![From the browser](docs/readme/images/usage-remove-edges-by-id.png)

##### `Enter the id of the edge`

![From the browser](docs/readme/images/usage-remove-edges-by-id-enter.png)

![From the browser](docs/readme/images/usage-remove-edges-by-id-message.png)

### **10** Remove edges and nodes by click <a id="remove-edges-and-nodes-by-click"></a>: 
---
![From the browser](docs/readme/images/usage-remove-edges-nodes-by-click.png)

![From the browser](docs/readme/images/usage-remove-edges-nodes-by-click-message.png)

### **11** Initialize graph <a id="initialize-graph"></a>: 
---

![From the browser](docs/readme/images/usage-init-graph.png)

![From the browser](docs/readme/images/usage-init-graph-message.png)


### **12** Create graph usign adjancy list <a id="create-graph-using-adjacency-list"></a>:
---
![From the browser](docs/readme/images/usage-create-graph-usign-adjacency-matrix.png)


![From the browser](docs/readme/images/usage-create-graph-usign-adjacency-matrix-enter.png)

![From the browser](docs/readme/images/usage-create-graph-usign-adjacency-matrix-message.png)

### **13** Create graph from list of edges <a id="create-graph-from-list-of-edges"></a>:
---
![From the browser](docs/readme/images/usage-create-graph-usign-list-of-edges.png)


![From the browser](docs/readme/images/usage-create-graph-usign-list-of-edges-enter.png)

![From the browser](docs/readme/images/usage-create-graph-usign-list-of-edges-message.png)

### **14** Graph informations <a id="graph-informations"></a> : 
---

![From the browser](docs/readme/images/usage-info-all.png)

#### `Adjacency Matrix`

![From the browser](docs/readme/images/usage-info-matrix-adjacent.png)

![From the browser](docs/readme/images/usage-info-matrix-adjacent-show.png)


#### `Incidence Matrix`

![From the browser](docs/readme/images/usage-info-matrix-incident.png)

![From the browser](docs/readme/images/usage-info-matrix-incident-show.png)

#### `Graph Adjacency List`

![From the browser](docs/readme/images/usage-info-list-adjacent.png)

![From the browser](docs/readme/images/usage-info-list-adjacent-show.png)

### **15** Save & Upload your work <a id="save--upload-your-work"></a> : 
---

#### `Save your graph on Json file`

![From the browser](docs/readme/images/usage-save-json.png)

![From the browser](docs/readme/images/usage-save-json-filr.png)

#### `Upload your graph from Json file`

![From the browser](docs/readme/images/usage-upload-json.png)

![From the browser](docs/readme/images/usage-upload-json-file.png)

![From the browser](docs/readme/images/usage-upload-json-message.png)

#### `Save your graph as a png,jpg image`

![From the browser](docs/readme/images/usage-save-jpg-png.png)


## License

MATH3RAPHE-WEB is [GPL Licensed](LICENSE)
