(function (window, WA, undefined)
{
    'use strict';

    if (!window.WaPollValidator)
    {
        window.WaPollValidator = PollValidator;
    }

    function PollValidator()
    {
        var self = this,
            pollGadgetSelector = '.WaGadgetPoll',
            questionBlockSelector = '.votingBlock';

        init();

        function init()
        {
            jq$(pollGadgetSelector).on('click', 'form input[type=submit]', onSubmitPoll);

            jq$(pollGadgetSelector).on('click', 'form input[type=checkbox], form input[type=radio]', onPressCheckbox);
        }

        function onSubmitPoll(e)
        {
            var questionNodes = [].slice.call(document.querySelectorAll(pollGadgetSelector +' '+ questionBlockSelector)),
                result = true;

            questionNodes.forEach(function(item, i, arr)
            {
                if( checkQuestionNode(item) === false ) result = false;
            });

            return result;
        }

        function checkQuestionNode(questionNode)
        {
            var limit = getLimitForQuestion(questionNode),
                selected = getCheckedOptions(questionNode),
                suggestionInput = getSuggestionInput(questionNode),
                isRequired = getIsRequiredForQuestion(questionNode);

            if(isRequired && selected.length < 1 || selected.length === 1 && selected[0].value === "suggestion" && suggestionInput.value.trim() === "")
            {
                showError(questionNode, 'An answer is required');
                return false;
            }

            if(limit > 0 && selected.length > limit)
            {
                showError(questionNode, 'Maximum '+ limit +' options');
                return false;
            }

            return true;
        }

        function onPressCheckbox(e)
        {
            var questionNode = e.target.closest(questionBlockSelector),
                limit = getLimitForQuestion(questionNode),
                selected = getCheckedOptions(questionNode);

            if(selected.length > 0 && (selected.length <= limit || limit == 0) )
            {
                hideError(questionNode);
            }
        }

        function getLimitForQuestion(questionNode)
        {
            return +questionNode.getAttribute('data-limit') || 0;
        }

        function getIsRequiredForQuestion(questionNode)
        {
            return questionNode.getAttribute('data-isRequired').toLowerCase() !== "false";
        }

        function getCheckedOptions(questionNode)
        {
            return questionNode.querySelectorAll('.optionItem input[type=checkbox]:checked, .optionItem input[type=radio]:checked');
        }

        function getSuggestionInput(questionNode)
        {
            return questionNode.querySelector('input[type=text]');
        }

        function showError(questionNode, text)
        {
            if(text)
            {
                questionNode.querySelector('.errorMsg').innerHTML = text;
            }

            questionNode.querySelector('.errorMsg').style.display = 'block';
        }

        function hideError(questionNode)
        {
            questionNode.querySelector('.errorMsg').style.display = 'none';
        }
    }

    var instance;

    PollValidator.getInstance = function()
    {
        return instance || (instance = new PollValidator());
    };

})(window, window.WA);