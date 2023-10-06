/**
 * Given a list of people to cycle through, and the number of persons to be skipped each time, return the name of the last person remaining.
 *
 * @param {LinkedList} list
 * @param m - the number to skip
 *
 * Method: Make the list circular, then cycle through it skipping m nodes each time and changing the 'next' pointer to remove a node, until only one remains.
 */

function josephus(list, m) {
	// Declare variable 'node' and initialize it to the head
	let node = list.head;
	// Declare variable 'tail' and initialize it to the last node in the list (find node with null 'next')
	const tail = list.find((node) => !node.next);
	// Assign the 'next' pointer of 'tail' to the head of the list
	tail.next = list.head;

	// While there is more than one node left, do...
	while (node.next !== node) {
		// Move 'node' to 'node.next' 'm' times
		for (let i = 1; i < m; i++) {
			node = node.next;
		}
		// If the 'next' pointer of the current node points to the head...
		if (node.next === list.head) {
			// Set the head to the next node after it
			list.head = list.head.next;
		}
		// Set 'node.next' to 'node.next.next'
		node.next = node.next.next;
		// Set 'node' to 'node.next'
		node = node.next;
	}

	// Return the value of 'node'
	return node.value;
}

module.exports = josephus;
