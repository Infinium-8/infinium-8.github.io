async function fetchNodeData() {
    try {
        const response = await fetch('https://nodes.infinium.space/list/nodes/');
        const data = await response.json();
        return data.nodes;
    } catch (error) {
        console.error('Error fetching node data:', error);
        return [];
    }
}

async function populateTable() {
    const nodes = await fetchNodeData();
    const tableBody = document.getElementById('node-table-body');

    nodes.forEach(node => {
        const row = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        nameCell.textContent = node.name;
        row.appendChild(nameCell);

        const urlCell = document.createElement('td');
        urlCell.textContent = node.url;
        row.appendChild(urlCell);

        const portCell = document.createElement('td');
        portCell.textContent = node.port;
        row.appendChild(portCell);

        const heightCell = document.createElement('td');
        heightCell.textContent = node.height;
        row.appendChild(heightCell);

        const mempoolCell = document.createElement('td');
        mempoolCell.textContent = node.mempool;
        row.appendChild(mempoolCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = node.status;
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateTable);