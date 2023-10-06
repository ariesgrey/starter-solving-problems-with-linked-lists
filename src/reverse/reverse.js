const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 *
 * Method: Take each value in the list, starting from the head, and insert it at the head of another list, putting the values in reverse order.
 */
function reverseIterative(list) {
	// Declare variable 'reversedList' and initialize to an empty LinkedList
	const reversedList = new LinkedList();
	// Declare variable 'node' initialized to the head of the given list
	let node = list.head;
	// While the node pointer is not null, do...
	while (node) {
		// Insert 'node' value at the head of 'reversedList'
		reversedList.insertAtHead(node.value);
		// Move the node pointer along to the next node
		node = node.next;
	}
	// Return the reversedList
	return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 *
 * Method: Base case - return the list with only last node remaining
 *         Recursive case - save the head node, remove it from the list, recursive call to new list, add saved nodes to new list
 */
function reverseRecursive(list) {
	// Base case
	// If the list has 1 or fewer nodes, return list
	if (list.length <= 1) {
		return list;
	}

	// Recursive case
	// Declare variable 'head' initialized to the current head node's value
	const head = list.head.value;
	// Remove the head node from the list (index 0)
	list.remove((node, index) => index === 0);
	// Declare variable 'reversedList' initialized to a recursive call to 'reverseRecursive(list)' - will remove each node until base case is satisfied, and the list is returned with only the original tail node remaining
	const reversedList = reverseRecursive(list);
	// Insert the removed 'head' node into 'reversedList' - recursive calls will add each node in reversed order
	reversedList.insert(head);

	// Return 'reversedList'
	return reversedList;
}

module.exports = { reverseIterative, reverseRecursive };
