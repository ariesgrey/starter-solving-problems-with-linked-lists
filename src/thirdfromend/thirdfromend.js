const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 * Method: Use a loop and 2 pointers -
 *  - First take one pointer to the 3rd node, return null if list is less than 3 nodes long
 *  - Then keep moving the pointers simultaneously until first pointer reaches the last node and second pointer is at third from end
 */

function thirdFromEnd(list) {
	// If the list is empty, return null
	if (!list.head) {
		return null;
	}

	// Declare variable 'pointer1' and initialize it to the head of the list
	let pointer1 = list.head;
	// Declare variable 'i' and initialize it to 0
	let i = 0;
	// While i < 2 and the 'next' pointer of 'pointer1' is not null, do...
	while (i < 2 && pointer1.next) {
		// Set pointer1 to its next pointer
		pointer1 = pointer1.next;
		// Increment i
		i++;
	}
	// If i < 2, return null
	if (i < 2) {
		return null;
	}

	// Declare variable 'pointer2' and initialize it to the head of the list
	let pointer2 = list.head;
	// While the 'next' pointer of 'pointer1' is not null, do...
	while (pointer1.next) {
		// Set 'pointer1' to its 'next' pointer
		pointer1 = pointer1.next;
		// Set 'pointer2' to its 'next' pointer
		pointer2 = pointer2.next;
	}

	// Return 'pointer2'
	return pointer2;
}

module.exports = thirdFromEnd;
