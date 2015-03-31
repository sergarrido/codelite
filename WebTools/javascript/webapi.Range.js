
/**
 * @brief The Range interface represents a fragment of a document that can contain nodes and parts of text nodes in a given document.
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range
 */
function Range() {

	/**
	 * @brief The Range.setStart() method sets the start position of a Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart
	 * @param startNode - The Node where the Range should start.
	 * @param startOffset  - An integer greater than or equal to zero representing the offset for the start of the Range from the start of startNode.
	 */
	this.setStart = function(startNode, startOffset ) {};

	/**
	 * @brief The Range.setEnd() method sets the end position of a Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/setEnd
	 * @param endNode - The Node where the Range should end.
	 * @param endOffset - An integer greater than or equal to zero representing the offset for the end of the Range from the start of endNode.
	 */
	this.setEnd = function(endNode, endOffset) {};

	/**
	 * @brief The Range.setStartBefore() method sets the start position of a Range relative to another Node. The parent Node of the start of the Range will be the same as that for the referenceNode.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartBefore
	 * @param referenceNode - The Node before which the Range should start.
	 */
	this.setStartBefore = function(referenceNode) {};

	/**
	 * @brief The Range.setStartAfter() method sets the start position of a Range relative to a Node. The parent Node of the start of the Range will be the same as that for the referenceNode.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartAfter
	 * @param referenceNode - The Node to start the Range after.
	 */
	this.setStartAfter = function(referenceNode) {};

	/**
	 * @brief The Range.setEndBefore() method sets the end position of a Range relative to another Node. The parent Node of end of the Range will be the same as that for the referenceNode.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndBefore
	 * @param referenceNode - The Node to end the Range before.
	 */
	this.setEndBefore = function(referenceNode) {};

	/**
	 * @brief The Range.setEndAfter() method sets the end position of a Range relative to another Node. The parent Node of end of the Range will be the same as that for the referenceNode.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndAfter
	 * @param referenceNode - The Node to end the Range after.
	 */
	this.setEndAfter = function(referenceNode) {};

	/**
	 * @brief The Range.selectNode() method sets the Range to contain the Node and its contents. The parent Node of the start and end of the Range will be the same as the parent of the referenceNode.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNode
	 * @param referenceNode - The Node to select within a Range.
	 */
	this.selectNode = function(referenceNode) {};

	/**
	 * @brief The Range.selectNodeContents() sets the Range to contain the contents of a Node.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNodeContents
	 * @param referenceNode - The Node whose contents will be selected within a Range.
	 */
	this.selectNodeContents = function(referenceNode) {};

	/**
	 * @brief The Range.collapse() method collapses the Range to one of its boundary points.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/collapse
	 * @param toStart Optional - A boolean value: true collapses the Range to its start, false to its end. If omitted, it defaults to false  .
	 */
	this.collapse = function(toStart Optional) {};

	/**
	 * @brief The Range.cloneContents() returns a DocumentFragment copying the objects of type Node included in the Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneContents
	 */
	this.cloneContents = function() {};

	/**
	 * @brief The Range.deleteContents() removes the contents of the Range from the Document.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents
	 */
	this.deleteContents = function() {};

	/**
	 * @brief The Range.extractContents() method moves contents of the Range from the document tree into a DocumentFragment.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/extractContents
	 */
	this.extractContents = function() {};

	/**
	 * @brief The Range.insertNode() method inserts a node at the start of the Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode
	 * @param newNode - The Node to insert at the start of the range.
	 */
	this.insertNode = function(newNode) {};

	/**
	 * @brief The Range.surroundContents() method moves content of the Range into a new node, placing the new node at the start of the specified range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents
	 * @param newNode - A Node to split based on the range.
	 */
	this.surroundContents = function(newNode) {};

	/**
	 * @brief The Range.compareBoundaryPoints() method compares the boundary points of the Range with another one.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/compareBoundaryPoints
	 * @param compare - A number, -1, 0, or 1, indicating whether the corresponding boundary-point of the Range is respectively before, equal to, or after the corresponding boundary-point of sourceRange.
	 * @param how - A constant describing the comparison method:
 
  Range.END_TO_END compares the end boundary-point of sourceRange to the end boundary-point of Range.
  Range.END_TO_START compares the end boundary-point of sourceRange to the start boundary-point of Range.
  Range.START_TO_END compares the start boundary-point of sourceRange to the end boundary-point of Range.
  Range.START_TO_START compares the start boundary-point of sourceRange to the start boundary-point of Range.
 

 If the value of the parameter is invalid, a DOMException with a NOT_SUPPORTED_ERR code is thrown.
	 * @param sourceRange  - A Range to compare boundary points with the range.
	 */
	this.compareBoundaryPoints = function(compare, how, sourceRange ) {};

	/**
	 * @brief The Range.cloneRange() method returns a Range object with boundary points identical to the cloned Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneRange
	 */
	this.cloneRange = function() {};

	/**
	 * @brief The Range.detach() method releases a Range from use. This lets the browser choose to release resources associated with this Range. Subsequent attempts to use the detached range will result in a DOMException being thrown with an error code of INVALID_STATE_ERR.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/detach
	 */
	this.detach = function() {};

	/**
	 * @brief The Range.toString() method is a stringifier returning the text of the Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/toString
	 */
	this.toString = function() {};

	/**
	 * @brief The Range.compareNode() returns a constant indicating the position of the Node.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/compareNode
	 * @param referenceNode - The Node to compare with the Range.
	 */
	this.compareNode = function(referenceNode) {};

	/**
	 * @brief The Range.comparePoint() method returns -1, 0, or 1 depending on whether the referenceNode is before, the same as, or after the Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/comparePoint
	 * @param referenceNode - The Node to compare with the Range.
	 * @param offset - An integer greater than or equal to zero representing the offset inside the referenceNode.
	 */
	this.comparePoint = function(referenceNode, offset) {};

	/**
	 * @brief The Range.createContextualFragment() method returns a DocumentFragment by invoking the HTML fragment parsing algorithm or the XML fragment parsing algorithm with the start of the range (the parent of the selected node) as the context node. The HTML fragment parsing algorithm is used if the range belongs to a Document whose HTMLness bit is set. In the HTML case, if the context node would be html, for historical reasons the fragment parsing algorithm is invoked with body as the context instead.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment
	 * @param tagString - Text that contains text and tags to be converted to a document fragment.
	 */
	this.createContextualFragment = function(tagString) {};

	/**
	 * @brief The Range.getBoundingClientRect() method returns a ClientRect object that bounds the contents of the range; this a rectangle enclosing the union of the bounding rectangles for all the elements in the range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/getBoundingClientRect
	 */
	this.getBoundingClientRect = function() {};

	/**
	 * @brief The Range.getClientRects() method returns a list of ClientRect objects representing the area of the screen occupied by the range. This is created by aggregating the results of calls to Element.getClientRects() for all the elements in the range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/getClientRects
	 */
	this.getClientRects = function() {};

	/**
	 * @brief The Range.intersectsNode() method returns a boolean indicating whether the given Node intersects the Range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/intersectsNode
	 * @param referenceNode - The Node to compare with the Range.
	 */
	this.intersectsNode = function(referenceNode) {};

	/**
	 * @brief The Range.isPointInRange() method returns a boolean indicating whether the given point is in the Range. It returns true if the point (cursor position) at offset within ReferenceNode is within this range.
	 * @link https://developer.mozilla.org/en-US/docs/Web/API/Range/isPointInRange
	 * @param referenceNode - The Node to compare with the Range.
	 * @param offset - The offset into Node of the point to compare with the Range.
	 */
	this.isPointInRange = function(referenceNode, offset) {};

}
