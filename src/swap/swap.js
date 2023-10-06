/**
 * Given a list and two nodes, swap the position of the two nodes
 *
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 *
 * Method: Find the 2 previous nodes before x and y and the node after x, then reassign next pointers and then values.
 */

function swap(list, x, y) {
	// If the list is empty, return the list
	if (!list.head) {
		return list;
	}

	// Declare variable 'x_next' and initialize it to the 'next' pointer of 'x'
	const x_next = x.next;
	// Declare variable 'x_prev' and initialize it to the node before 'x' (null if 'x' is the head)
	const x_prev = list.findWithPrevious((node) => node === x)[1];
	// Declare variable 'y_prev' and initialize it to the node before 'y' (null if 'y' is the head)
	const y_prev = list.findWithPrevious((node) => node === y)[1];

	// Set the 'next' pointer of 'x' to the 'next' pointer of 'y'
	x.next = y.next;
	// Set the 'next' pointer of 'y' to 'x_next'
	y.next = x_next;

	// If 'x' is not the head of the list, then...
	if (x_prev) {
		// Set 'next' pointer of 'x_prev' to 'y'
		x_prev.next = y;
	} else {
		// Else, set the head to 'y'
		list.head = y;
	}

	// If 'y' is not the head of the list, then...
	if (y_prev) {
		// Set 'next' pointer of 'y_prev' to 'x'
		y_prev.next = x;
	} else {
		// Else, set the head to 'x'
		list.head = x;
	}

	// Return the list
	return list;
}

module.exports = swap;
